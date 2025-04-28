---
title: Getting Started
layout: base
date: 2024-10-24
---

{% include jumbotron.html
  height="50"
  image-url="/assets/bg-images/image_1.jpg"
  title="StoryFlow"
%}


This page demonstrates the various components you can assemble in your essay. Rather than cluttering the page with code snippets, those are available on the [code page](guides/code.md)


### Inline Images
The most basic functionality is easily placing images in your story. You can have them off to the right.

You can have them off to the left. You can control the width.

### Scrolly boxes on revealed images
Sometimes it's fun to have a background image be revealed, and once it's in view, scroll up a text box that says something related to the image.



<!--bg images look like they are being revealed; try having image that comes up and moves away and can lock into place.-->

{% include bg.html
  height="220"
  image-url="/assets/bg-images/image_3.jpg"
  pre-box-space="100"
  box-content=" 
       See, there is a text box scrolling by right now! And once this scrolls off the top of the page, you'll start to see the next section emerge at the bottom of the screen."
%}


### Header images
You can use images as section headings in two ways. 

####  Window View
The background image we just scrolled past has a large height. We can set the header height to be smaller than the image to create the effect of the header revealing parts of a larger image like so:

{% include bg.html
  height="10"
  image-url="/assets/bg-images/image_1.jpg"
  title="Section Heading"
%}

#### Jumbotron View
Instead of a header image "revealing" an image behind it, the header can be a regular static image like so:

{% include jumbotron.html
  height="10"
  image-url="/assets/bg-images/image_1.jpg"
  title="Section Heading"
%}



### Scrolly boxes on fixed images
You can also have a large backgrtound image scroll into view, then freeze it while other contents scrolls past, and then scroll the background image away. That's what will happen next. 


{% include bg-sticky.html
  height="220"
  image-url="/assets/bg-images/image_2.jpg"
  pre-box-space="100"
  box-content="
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 

       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 
       
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 
       
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away.   "
%}


### Changing Backgrounds
Sometimes it's fun to have the background change as a user moves through a story. We can do this, too. 

{% include bg-multi.html
  id="first"
  height="220"
  pre-box-space="100"
  box-content="
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 

       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 
       
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 
       
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away.   "
%}
