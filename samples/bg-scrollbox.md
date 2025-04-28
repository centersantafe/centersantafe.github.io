---
title: Getting Started
layout: base
date: 2024-10-24
---

{% include jumbotron.html
  height="50"
  image-url="/assets/bg-images/flowers-3.jpg"
  title="Background scroll boxes"
%}


### Scrolly boxes on revealed images
The [images](images) page shows how to reveal background images. We can also have textboxes scroll up past the image after the image fully comes into view.

Nunc posuere metus quis tempus dapibus. Sed hendrerit dapibus risus, gravida lacinia erat placerat ut. Sed purus ante, rutrum in libero sed, pretium laoreet mauris. Pellentesque sit amet viverra est. Mauris mi orci, ullamcorper vitae arcu nec, pretium vestibulum lorem. In pulvinar libero at ex venenatis vestibulum. Sed nec mauris maximus, ornare magna eu, bibendum ligula. Proin a justo non tellus consequat dapibus vel sit amet elit.


{% include bg.html
  height="220"
  image-url="/assets/bg-images/hike-3.jpg"
  pre-box-space="100"
  box-content=" 
       See, there is a text box scrolling by, visible after the whole background came into view. Once this text box scrolls off the top of the page, you'll start to see the next section emerge at the bottom of the screen."
%}




### Scrolly boxes on fixed images
Just above, wee see how to have a large background image "revealed" by the page scrolling up off of it, meaning it looks stationary while text scrolls past it.

As you can see below, you can also have a large backgrtound image scroll into view (instead of remaining still), as is happening below. 

The image freeze it when it gets to the top of the viewport, and a textbox can scroll past, grabbing the background with it as it scrolls away. Check it!


{% include bg-sticky.html
  height="220"
  image-url="/assets/bg-images/hike-4.jpg"
  pre-box-space="100"
  box-content="
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 
<hr/>
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 
  <p/>     
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away. 
    <p/>   
       This text box is scrolling. And as soon as it leaves the viewport, the background image will begin to scroll away.   "
%}


## That's a wrap 
That's all for basic images. We can also do [background switching](bg-switch) and [side scrolling](side-scroll).
