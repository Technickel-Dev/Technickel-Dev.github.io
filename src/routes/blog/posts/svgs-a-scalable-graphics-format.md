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

## What is an SVG?

The future of web graphics is ever changing but time and time again you will hear one special graphic uttered through the grape vine. That graphic goes by the name of SVG, but what exactly is it? SVG stands for _scalable vector graphics_. It is an XML-based markup language for describing two-dimensional based vector graphics. That's still a pretty confusing way to describe it, so lets think of it this way.

You are most likely familiar with the most popular type of graphic called _Raster Graphics_. Raster Graphics are images made up of individual pixels with the most common types being PNG and JPEG. You interact with Raster Graphics everyday without even knowing it. An SVG on the other hand, can be simplified down to individual pieces of math and code to describe a shape.

![Difference between bitmap and vector images](/blog/raster_vs_vector.png "Raster Vs. Vector")

<div class="text-center">

_Difference between raster and vector images. ([Yug et al.](https://commons.wikimedia.org/w/index.php?curid=1183592))_

</div>

## SVGs in action

To see how an SVG works, let's look at the following block of code that describes the shape of a yellow circle with a green outline.

```html
<circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow"></circle>
```

Let's break down what this actually means:

- The tag _circle_ is the element that we are trying to produce. For this instance, our SVG element is a circle.
- The first two arguments, _cx_ and _cy_, represent the position of the circle on the canvas. In this case we move 50 "units" in the x direction and 50 "units" in the y direction.
- The third argument, _r_, represents the radius of the circle. It essentially sets how big the circle will be.
- Next up, _stroke_, can be thought as taking a painters brush and outlining the circle with it. In this case the outline would be green.
- The following argument, _stroke-width_, defines how big the painters brush actually is.
- Finally, the whole circle is colored yellow using _fill_, inside of the outline we did with stroke.

Voila! The computer handles the rest by drawing the circle using the parameters you have provided. The end result looks something like this:

![SVG of a yellow circle with green outline](/blog/yellow_circle_svg.png "Yellow Circle SVG")

<div class="text-center">

_SVG of a yellow circle with green outline_

</div>

## Why should we be using SVGs?

The most important part to SVGs is the scalability of them. Unlike a Raster image, when an SVG is made bigger or smaller, it doesn’t lose any detail. The math just calculates how that SVG would look at the new size! They are also super small in file size compared to JPGs and PNGs and can be optimized. Another neat fact is that depending on how it is used, they are natively accessible since they can be read like a book, unlike images. Finally, the most useful part of SVGs in my opinion is the fact they can be animated. While a normal image animation may take a lot of effort to put together, an SVG can be animated directly by changing the math that creates the shapes.

## Uses for an SVG

The use of an SVG is only limited by your technology and imagination. Some uses include logos, brochures, mockups, websites, backgrounds, art, and so much more. The website that you are reading this blog on has SVGs baked in to a few places including the animated landing page. I've also made SVG art in the past for fun Canada Day celebrations. The posibilities are up to you to decide!

![SVG celebrating Canada Day](/blog/canada_day_svg.png "Canada Day SVG")

<div class="text-center">

_SVG celebrating Canada Day_

</div>

## How to make your own SVGs

There are a number of ways to make your own SVGs, and it's really easy to get started. For some free tools, all you need is a browser and some kind of text editor. (Ex. Chrome and VSCode) The browser understands how to display SVGs to see what you can make. [Inkscape](https://inkscape.org/) is also a free tool dedicated to SVG design. On the paid side of the spectrum, [Photoshop](https://www.adobe.com/ca/products/photoshop.html) and [Affinity Designer](https://affinity.serif.com/en-us/designer/) have powerful SVG functionality built in. I personally use Inkscape and Affinity Designer though the tools mentioned are not the only ones out there. To learn more about SVG shapes and parameters, have a quick read through the [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/SVG) as they are really good and my go to when I want to learn something about SVGs.

## Recap

Overall, SVGs may not be the only web graphic solution out there, but they are definitely a powerhouse hidden in a small and easy to use package. It’s no doubt that as we find new and exciting ways to convey our information with images, that SVGs will stay high in importance. Give SVGs a try, you never know what cool things you may end up making!
