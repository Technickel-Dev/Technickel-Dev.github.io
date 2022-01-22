---
title: "SVGs: A Scalable Graphics Format"
author: Bradley Leonard
date: "2022-01-21"
description: An introduction the the wondeful world of SVGs! Starting at the bare basics, this post goes into what SVGs are, how to use them and why you might use SVGs over other traditional graphics formats in web design.
tags:
  - svg
  - graphics
  - web
  - design
---

# {title}

{date} - {author}
<br>

## What is an SVG?

The future of web graphics is ever changing but time and time again you will hear one special graphic uttered by many developers. That graphic goes by the name of SVG, but what exactly is it? SVG stands for _scalable vector graphics_. It is an XML-based markup language for describing two-dimensional based vector graphics. That's still a pretty confusing way to describe it, so lets think of it this way.<br><br>

You are most likely familiar with the most popular type of graphic called _Raster Graphics_. Raster Graphics are images made up of individual pixels with the most common types being PNG and JPEG. You interact with Raster Graphics everyday without even knowing it. An SVG on the other hand, can be simplified down to individual pieces of math and code to describe a shape.<br><br>

## SVGs in action

To see how an SVG works, let's look at the following block of code that describes the shape of a yellow circle with a green outline.<br><br>

```html
<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
```

<br>
Let's break down what this actually means:<br><br>

- The tag _circle_ is the element that we are trying to produce. For this instance, our SVG element is a circle.
- The first two arguments, _cx_ and _cy_, represent the position of the circle on the canvas. In this case we move 50 "units" in the x direction and 50 "units" in the y direction.
- The third argument, _r_, represents the radius of the circle. It essentially sets how big the circle will be.
- Next up, _stroke_, can be thought as taking a painters brush and outlining the circle with it. In this case the outline would be green.
- The following argument, _stroke-width_, defines how big the painters brush actually is.
- Finally, the whole circle is colored yellow using _fill_, inside of the outline we did with stroke.<br><br>

Voila! The computer handles the rest by drawing the circle using the parameters you have provided. The end result looks something like this:

<br><br>

## Why should we be using SVGs?

The most important part to SVGs is the scalability of them. Unlike a Raster image, when an SVG is made bigger or smaller, it doesn’t lose any detail. The math just calculates how that SVG would look at the new size! They are also super small in file size compared to JPGs and PNGs and can be optimized. Another neat fact is that depending on how it is used, they are natively accessible since they can be read like a book, unlike images. Finally, the most useful part of SVGs in my opinion is the fact they can be animated. While a normal image animation may take a lot of effort to put together, an SVG can be animated directly by changing the math that creates the shapes.<br><br>

## Uses for an SVG

The use of an SVG is only limited by your technology and imagination, with uses being logos, brochures, mockups, websites, backgrounds, art, and so much more.<br><br>

## How to do your own SVGs

## Recap

Overall, SVGs may not be the only web graphic solution out there, but they are definitely a powerhouse hidden in a small and easy to use package. It’s no doubt that as we find new and exciting ways to convey our information with images, that SVGs will stay high in importance.
