---
title: "DNS Verification For Your Personal Website With Brave Creators"
author: Bradley Leonard
date: "2022-01-24"
description: A tutorial on how to verify your personal website as a channel for your Brave Creators account. Unlock a new channel of monetize through your content and audience.
tags:
  - brave
  - bat
  - web
  - dns
  - tutorial
published: true
---

# {title}

{date} - {author}

## Brave Creators domain verification

On the road to creating awesome content you may want to find ways to monetize your creations. With [Brave Creators](https://creators.brave.com/), you can unlock a new channel of revenue through collecting BAT tips that your audience can give you using the [Brave Browser](https://brave.com/). Using this tutorial, you will be able to verify your domain with Brave Creators so you can start collecting those tips and earning money for those fantastic works of passion.

## How to verify a channel for Brave Creators

There are two methods of verification for a website channel (and a third one if you run a Wordpress website). The first method is called _File Upload Verification_ and involves uploading a file to the website in a specific spot. We aren't going to be going over that method today and are instead going to do the second method, _DNS Verification_.

## What is DNS verification?

DNS Verification is the act of adding an entry to your domain that proves that you own it to the service that you need to verify for. Think of it this way, you might ask a construction company to do work on your house. They come back to you and say, before they can do work on your house, you need to prove you own it by putting a sticker in the window so when the construction crew comes by to work, they know that you both own the house and that's the house they should be working on. This way your neighbour can't trick construction company to do the work on their house rather than yours.

## How to do a DNS verification

The process of DNS Verification for Brave Creators can be broken down into 3 easy steps...

### 1. Getting the DNS verification record from Brave

Log in or sign up to [Brave Creators](https://creators.brave.com/) if you haven't already. On the homepage, you should be able to click the _"Add a Channel"_ button.

<div style="text-align:center">

![Add Brave Creators Channel](/blog-images/create_channel.png "Add Brave Creators Channel")

_Add a Channel_

</div>

Choose website as the channel and enter in your apex domain. An apex domain is the top level domain (ex. apex: `google.com` vs sub: `www.google.com` or apex: `technickel.dev` vs sub: `blogs.technickel.dev`). Finally, decide if you will allow Brave to serve ads on your site.

<div style="text-align:center">

![Enter Apex Domain](/blog-images/choose_domain.png "Enter Apex Domain")

_Enter Your Apex Domain_

</div>

Next you'll be given the choice to do the File Upload Verification or the DNS Verification, so we choose the DNS Verification.

<div style="text-align:center">

![Choose DNS Verification](/blog-images/edit_dns.png "Choose DNS Verification")

_Choose DNS Verification_

</div>

We are finally at the end of this step, all thats left to do is copy the string in the _TXT Value_ box.

<div style="text-align:center">

![Copy TXT Value](/blog-images/txt_value.png "Copy TXT Value")

_Copy TXT Value_

</div>

### 2. Create the DNS record in your domain registrar

Log into your domain registrar, ie. the place where you bought your domain. My domain currently exists on Google Domains so that is what I'll be using for this tutorial, though the process shouldn't be much different for other domain registrars. First navigate to the domain and then the DNS area for that specific domain.

<div style="text-align:center">

![Navigate to DNS Area](/blog-images/dns_page.png "Navigate to DNS Area")

_Navigate to DNS Area_

</div>

It should bring you to a page that may or may not have content already on it depending on how you've used your domain. We need to add a new custom record for the TXT record that we copied from Brave Creators.

<div style="text-align:center">

![Manage Custom Records](/blog-images/manage_custom_records.png "Manage Custom Records")

_Manage Custom Records_

</div>

Before we actually add the record, let's break down what the individual fields stand for:

- _Host Name_ - represents the domain variant that you will be applying the record to. In our case we are going to leave this blank as Google domains automatically applies the apex domain. You may have to use '@' or your actual domain as your value depending on who your registrar is.
- _Type_ - this is the type of the record. In DNS land, each type of record specifies doing something different. Our record is going to be a TXT record, which is just a record that contains text for sources outside of your domain. (Ie. Brave Creators)
- _TTL_ - how long before the copy of the record hosted on the server is updated or deleted. This is not overly important for our purposes, so we will leave it at 1 hour.
- _Data_ - this is the actual value that we want for the record. In our case, we want the value that we copied from step 1.

Now that we understand what each piece of the puzzle does, all that's left to do for this step is to make the record. Fill in the information as explained above and click save.

<div style="text-align:center">

![Create the DNS TXT Record](/blog-images/dns_txt_record.png "Create the DNS TXT Record")

_Create the DNS TXT Record_

</div>

### 3. Wait and verify!

The hard part is now done! Since DNS takes a bit to update, it make take up to 24 hours for the changes to take effect. To see if it worked, periodically try to verify the domain on the Brave Creators side by clicking the "Verify DNS Record" button. If everything was done right, after the DNS propagates (again which may take up to 24h) then Brave Creators should recognize your domain as verified.

<div style="text-align:center">

![Verify DNS Record](/blog-images/verify.png "Verify DNS Record")

_Verify DNS Record_

</div>

After your domain is verified you should be able to navigate to your website using the Brave Browser and by clicking on Brave Rewards see that you can tip on your website and that it is a verified creator. This may take some time to update on Brave's side, but should show up eventually. This can be seen in the image below for my personal website!

<div style="text-align:center">

![Confirm Verification](/blog-images/verified.png "Confirm Verification")

_Confirm Verification_

</div>

## Recap

Congradulations! You are now a verified Brave Creator for your personal website. You can repeat the process for any other websites you might own, but keep in mind that you do not have to repeat the process for sub domains. By doing the steps for you apex domain, it should apply to all sub domains. Now all that's left to do is to create awesome content and let your audience know that they can support you by leaving a tip!
