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
The most basic functionality is easily placing images in your story, that are "fixed" to the page and move along with how the user scrolls.


You can have them off to the right.

You can have them off to the left. You can control the width.


### Jumbotron Images
If an smaller inline image isn't sufficient, go jumbo! Make the image the whole width of the browser window, and control the height of the image for whatever effect you need.

{% include jumbotron.html
  height="40"
  image-url="/assets/bg-images/image_1.jpg"
  title=""
%}



### Revealed images
Fixed images seem to move along with scrolling, but sometimes it's fun to have a background image be revealed. Surprise! Once it's in view, you can even scroll up a text box that says something related to the image before the image itself scrolls away. This image will set around until the whole image is visible, but you can control how much is visible before the text box starts to scroll up.

<!--bg images look like they are being revealed; try having image that comes up and moves away and can lock into place.-->

{% include bg.html
  height="220"
  image-url="/assets/bg-images/image_3.jpg"
  pre-box-space="100"
  box-content=" 
       See, there is a text box scrolling by, visible after the whole background came into view. Once this text box scrolls off the top of the page, you'll start to see the next section emerge at the bottom of the screen."
%}






### Section Header Images
You can use the jumbotron image as section header in a couple ways.

One is the way we saw before, but with a section title and optional subtitle.

### Jumbotron Images
If an smaller inline image isn't sufficient, go jumbo! Make the image the whole width of the browser window, and control the height of the image for whatever effect you need.

{% include jumbotron.html
  height="40"
  image-url="/assets/bg-images/image_1.jpg"
  title="Section Heading"
%}




####  Peekaboo View
You may have noticed that the last image was "fixed" to the scrolling page and scrolled past out of view with the text. 

We can set also the create the effect of the header revealing parts of a larger image as is happening below (also with or without a section heading):

{% include bg.html
  height="40"
  image-url="/assets/bg-images/image_1.jpg"
  title="Section Heading"
%}



### Scrolly boxes on fixed images
The last large background image was "revealed" by the page scrolling up off of it. You can also have a large backgrtound image scroll into view (instead of remaining still), then freeze it when it gets to the top of the viewport. Other content can scrolls past, and then scroll the background image away. That's what will happen next. 


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

