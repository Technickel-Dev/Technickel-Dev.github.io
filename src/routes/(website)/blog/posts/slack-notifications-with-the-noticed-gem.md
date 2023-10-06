---
title: "Slack Notifications with the Noticed Gem"
author: Bradley Leonard
date: "2022-02-17"
description: A walkthrough of how to use the Noticed gem by excid3 (Chris Oliver) to send Slack notifications.
tags:
  - rails
  - ruby
  - web
  - design
published: true
---

# {title}

{date} - {author}

## Introduction

Notification systems are essential in user based applications in order to convey important information to your users when they are in or out of the application. This blog post will make use of the [Slack API](https://api.slack.com/messaging/managing) and the [Noticed](https://github.com/excid3/noticed) gem to show you how you can send a Slack notification from your app and get that important information to your users in their favorite messaging program, Slack!

Our example is going to use the role of a ticketing system notification, but your use case could be any type of notification!

## What is Noticed?

Noticed is an open source Ruby gem built by Rails aficionado excid3 [(Chris Oliver)](https://twitter.com/excid3). It makes it SUPER easy to work with a number of different communication methods to send notifications to your users / systems. Some of these methods include:

- Database
- Email
- ActionCable channels
- Slack
- Microsoft Teams
- Twilio (SMS)
- Vonage / Nexmo (SMS)
- iOS Apple Push Notifications
- Firebase Cloud Messaging (Android and more)
- Your own custom method!

If you aren't already familiar with the basics of Noticed, you can watch this [screencast](https://youtu.be/Scffi4otlFc) to get your feet wet.

## The code

Here is all the code your going to need to send off a Slack message notification! Keep in mind the [Noticed gem needs to be setup](https://github.com/excid3/noticed#-installation) and you need to [generate a webhook for Slack](https://api.slack.com/messaging/webhooks#create_a_webhook) before any of this will work. Let's break it down piece by piece.

```ruby
class TicketClosedNotification < Noticed::Base
  deliver_by :database
  deliver_by :slack, url: :webhook_url, format: :to_slack

  # Add required params
  param :ticket

  def to_slack
    {
      text: slack_message
    }
  end

  def message
    "Ticket #{params[:ticket].id} was closed"
  end

  def slack_message
    "#<#{url_for(params[:ticket])}|Ticket #{params[:ticket].id}> closed by #{SlackService::slack_or_name(params[:ticket].owner)}"
  end

  def url
    ticket_path(params[:ticket])
  end

  def webhook_url
    # THIS PRACTICE IS DANGEROUS AND JUST FOR DEMONSTRATION PURPOSES
    # A Slack webhook has a secret in it and should not be directly commited to a public repository
    # Slack monitors for leaked webhooks and will revoke yours if it finds it
    # A better practice is to use environment variables or Rails credentials / secrets
    "https://hooks.slack.com/services/XXXXXXXXX/XXXXXXXXXXX/XXXXXXXXXXXXXXXXXXXXXXXX"
  end
end
```

### class TicketClosedNotification ≤ Noticed::Base

This line is very important and tells Noticed to work with this class as a notification. It's the base building block that everything else will be built off of.

### deliver_by :database

This is the standard delivery method for in-app notifications. An entry in the database will be made for recipients of the notification. This isn't as relevant to the Slack portion of things, but important none the less.

### deliver_by :slack, url: :webhook_url, format: :to_slack

Probably the most important line in the file, this tells Noticed how we are going to deliver our slack message. We pass both a url and format option that will be talked about later. The thing to know right now is what each option does and that both options have defaults if you leave them out.

The url option tells Noticed where to make the HTTP call so that we can work with the Slack API. This will default to a Rails credential if not overriden.

The format option tells Noticed in what format to send the request. By default this will send the notification parameters (in our example params[:ticket]) but Slack doesn't know what to do with the information in that format so we supplied our own options which we will talk about in a bit.

### param :ticket

This line tells the notification that it REQUIRES a ticket to work. Without including a ticket in the options, the notification will fail to send with an error. This allows us to make use of the ticket object to make dynamic messages and routes.

### to_slack

We use this method to format the payload that we send to Slack. We are going to keep things simple and only take advantage of the text options that you can send to Slack, but the API is super powerful and you can take advantage of [a number of different formatting options](https://api.slack.com/messaging/webhooks#advanced_message_formatting). In this method we make a hash with the text attribute being filled in by the "slack_message" method that we will talk about later. When this is sent to slack, whatever is in the text is the message that will display in the Slack channel.

### message

This method is setting the message for the database delivery method. While useful for in-app notifications, since we are focusing on Slack, this is not overly important.

### slack_message

I used this method to build the string that is passed to the text object that we send to Slack. When all said and done it looks something like "Ticket 1 closed by Technickel". There are a few things to note about the way this string is formatted.

The below code takes the url on the left and the text on the right. Slack interprets this as a link that shows the text only and takes you to the url when clicked on.

```html
<url|text></url|text>
```

The second thing of note is the method. This is a custom method for our application to ping or @ the user on Slack when a ticket pertains to them. We have a user store their Slack user ID (looks something like @XXXXXXXXXXX) on their profile and then we can reference ping them directly from the message. If the user doesn't have their Slack user ID, we just use their name instead.

```ruby
SlackService::slack_or_name(params[:ticket].owner)
```

### url

This section isn't really used for Slack notification purposes and is mainly for the database delivery method. We'll ignore it for this tutorial, but it usually sets the path you can use to link to in an in-app notification.

### webhook_url

By default the webhook url that Noticed uses is the following:

```ruby
Rails.application.credentials.slack[:notification_url]
```

If you only need to use one webhook, you can stick with this default and remove the _url: :webhook_url_ option. For applications that require more than one webhook, you can point the url option to a method. In our case, we use the webhook_url method to return the Slack webhook as a string. This webhook string should look similar to the one in the code, with a unique value replacing the Xs that slack uses to know to reference your Slack.

NOTE: It is VERY important not to put the webhook string straight into your code, especially if your source code is public. A Slack webhook has a secret in it and should not be directly commited to a public repository as other people can maliciously use it. Slack monitors for leaked webhooks and will revoke yours if it finds it, therefore a better practice is to use environment variables or Rails credentials / secrets and then reference those in the method.

## Recap

That's it! Now all you have to do is [call the notification using the normal calling methods](https://github.com/excid3/noticed#-usage) in the gem. With Noticed, it's super simple to setup slack notifications! It's also super convenient that Noticed handles all your other types of notification such as in-app, email, SMS, etc... so that your communication code can all live organized in one place. All in all, a fantastic addition to any Rails application.
