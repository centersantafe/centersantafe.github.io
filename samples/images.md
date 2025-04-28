---
title: Image Examples
layout: base
date: 2024-10-24
---

{% include jumbotron.html
  height="60"
  image-url="/assets/bg-images/pano-1.jpg"
  title="Image Examples"
%}


### Inline Images
The most basic functionality is easily placing images in your story, that are "fixed" to the page and move along with how the user scrolls.

{% include figure.html
  class="img-right"
  width="60%"
  caption="What a nice view"
  abs-image-url="/assets/bg-images/hike-1.jpg"
%}

### You can have them off to the right.

Etiam finibus risus et sagittis suscipit. Praesent id nisi metus. Vivamus odio ligula, iaculis vestibulum convallis id, vehicula at justo. Sed vestibulum elit at ante pellentesque pretium. Vestibulum euismod tempus sem sit amet scelerisque. Curabitur hendrerit fermentum rutrum. Nam suscipit dictum purus, non rhoncus dui sodales nec. Etiam convallis arcu metus, ut cursus risus porttitor sit amet. Duis ut sapien varius libero efficitur vehicula. Sed id massa id elit ullamcorper feugiat. In hac habitasse platea dictumst.

In hac habitasse platea dictumst. Sed ultrices venenatis nunc et eleifend. Praesent sapien enim, porta egestas tortor vitae, imperdiet mollis velit. Cras quis quam lacus. Cras ac felis sed nunc bibendum rutrum vitae at massa. Mauris id vestibulum dolor. Vivamus iaculis sollicitudin purus sit amet gravida. Aliquam erat diam, pretium eget urna at, pretium bibendum nunc. Nullam finibus aliquet diam, in ullamcorper odio vulputate tincidunt. Nam mauris felis, feugiat porta molestie ac, eleifend id quam. Suspendisse varius erat odio, et fermentum libero elementum sit amet. Morbi maximus justo fringilla facilisis tincidunt. Curabitur pretium nulla mauris, vel condimentum leo malesuada non. Cras purus erat, malesuada suscipit tempor sit amet, rhoncus et sapien. Fusce at blandit urna.


{% include figure.html
  class="img-left"
  width="30%"
  caption="What a nice view, again"
  abs-image-url="/assets/bg-images/hike-1.jpg"
%}

### You can have them off to the left. You can control the width.

Etiam finibus risus et sagittis suscipit. Praesent id nisi metus. Vivamus odio ligula, iaculis vestibulum convallis id, vehicula at justo. Sed vestibulum elit at ante pellentesque pretium. Vestibulum euismod tempus sem sit amet scelerisque. Curabitur hendrerit fermentum rutrum. Nam suscipit dictum purus, non rhoncus dui sodales nec. Etiam convallis arcu metus, ut cursus risus porttitor sit amet. Duis ut sapien varius libero efficitur vehicula. Sed id massa id elit ullamcorper feugiat. In hac habitasse platea dictumst.

In hac habitasse platea dictumst. Sed ultrices venenatis nunc et eleifend. Praesent sapien enim, porta egestas tortor vitae, imperdiet mollis velit. Cras quis quam lacus. Cras ac felis sed nunc bibendum rutrum vitae at massa. Mauris id vestibulum dolor. Vivamus iaculis sollicitudin purus sit amet gravida. Aliquam erat diam, pretium eget urna at, pretium bibendum nunc. Nullam finibus aliquet diam, in ullamcorper odio vulputate tincidunt. Nam mauris felis, feugiat porta molestie ac, eleifend id quam. Suspendisse varius erat odio, et fermentum libero elementum sit amet. Morbi maximus justo fringilla facilisis tincidunt. Curabitur pretium nulla mauris, vel condimentum leo malesuada non. Cras purus erat, malesuada suscipit tempor sit amet, rhoncus et sapien. Fusce at blandit urna.


### Jumbotron Images
If an smaller inline image isn't sufficient, go jumbo! Make the image the whole width of the browser window, and control the height of the image for whatever effect you need.

{% include jumbotron.html
  height="50"
  image-url="/assets/bg-images/hike-2.jpg"
  title=""
%}



### Revealed images
Fixed images seem to move along with scrolling, like the one above, but sometimes it's fun to have a background image be revealed as the reader scrolls down the page.

Nunc id urna eget nunc hendrerit aliquam. Fusce maximus eleifend ipsum, nec aliquet ante vestibulum eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam erat volutpat. Nullam porta blandit tellus, vitae porta odio ultricies a. Integer iaculis euismod feugiat. Etiam ipsum ipsum, pulvinar id semper et, laoreet ac felis. Ut fermentum cursus augue ac feugiat. Nullam convallis vitae sapien in condimentum. Maecenas at vulputate turpis, tempor faucibus dui. Sed quis volutpat elit, commodo mollis ligula. Sed id velit lacus. Mauris et pellentesque justo.

In laoreet, risus ac porttitor congue, libero eros ullamcorper nisl, vel volutpat est nunc sed nisi. Integer dolor ipsum, aliquam ac fermentum dapibus, accumsan eu tortor. Etiam laoreet tellus a dignissim porta. Vivamus et sapien nec urna mollis placerat id nec neque. Phasellus mattis non arcu vitae ultrices. Etiam a posuere ipsum. Nam nunc ex, aliquet eu consequat et, scelerisque quis lorem. Suspendisse sapien tortor, rutrum vitae sollicitudin vel, gravida ut nunc. Fusce non egestas lacus. Maecenas dictum commodo ultricies.

Keep scrolling! This image will set around until the whole image is visible, but you can control how much is visible before the text box starts to scroll up.

<!--bg images look like they are being revealed; try having image that comes up and moves away and can lock into place.-->

{% include bg.html
  height="100"
  image-url="/assets/bg-images/image_3.jpg"
%}


<!-- 
{% include bg.html
  height="220"
  image-url="/assets/bg-images/image_3.jpg"
  pre-box-space="100"
  box-content=" 
       See, there is a text box scrolling by, visible after the whole background came into view. Once this text box scrolls off the top of the page, you'll start to see the next section emerge at the bottom of the screen."
%}
-->



### Section Header Images
We've already seen the the jumbotron image that you can use as a section divider. 

You can also add a title and subtitle to make more of a section header.

{% include jumbotron.html
  height="30"
  image-url="/assets/bg-images/pano-1.jpg"
  title="Section Heading"
  subtitle="Your subtitle goes here"
%}


####  Peekaboo Headers
You may have noticed that the last section heading was "fixed" to the scrolling page and scrolled past out of view with the text. 

We can set also the create the effect of the header revealing parts of a larger image as is happening below (also with or without a section heading):

{% include bg.html
  height="40"
  image-url="/assets/bg-images/pano-1.jpg"
  title="Section Heading"
%}



## That's a wrap 
That's all for basic images. We can also do [background scrollboxes](bg-scrollbox), [background switching](bg-switch), and [side scrolling](side-scroll).

Lorem ipsum dolor sit amet, consectetur adipiscing elit. In egestas augue sed malesuada ornare. Aliquam dignissim at est vel sagittis. Curabitur ornare nec nulla in mollis. Phasellus in lacinia mi. Vivamus vel odio imperdiet, faucibus urna id, egestas mi. Donec venenatis ut elit volutpat cursus. Sed vel quam nec nunc ornare vestibulum. Donec placerat, ipsum vel dignissim convallis, enim lorem pharetra est, id eleifend mauris magna commodo ligula. Sed et pharetra quam. Nullam imperdiet nisl vitae sapien vehicula, eu faucibus lectus semper. Proin nec sollicitudin orci. Vivamus sit amet nulla posuere, rutrum libero eget, porta mi. Duis gravida nisl mollis ligula tempor, vitae sodales turpis pretium. In auctor enim non mauris ornare, nec suscipit ligula venenatis.

Ut ullamcorper ornare erat, sed ultricies arcu laoreet quis. Donec dapibus, elit id accumsan semper, metus arcu rutrum dui, eu pharetra velit eros sit amet mi. Ut risus metus, malesuada sit amet ullamcorper convallis, blandit nec quam. Nulla feugiat tincidunt mauris. Proin sed justo in est mattis vestibulum. Aliquam posuere, justo non lobortis rutrum, nibh tortor lobortis ipsum, ut aliquet enim tortor a felis. Aenean ornare feugiat quam vel sodales. Phasellus eget quam quis purus luctus faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus. In accumsan tincidunt risus et mattis. Aliquam quis diam rhoncus nisl iaculis pellentesque. Nulla vehicula ullamcorper feugiat. Mauris vel vestibulum lorem. Nullam at mi id turpis facilisis efficitur a ac orci. Praesent mi lorem, mattis nec nunc quis, ultricies tincidunt sem. Morbi vitae turpis et mauris scelerisque dignissim.
