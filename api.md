---
layout: base
title: API Test
subtitle: load image from piwigo API 
author: Fred Gibbs
date: 2024-10-28
---

API Test

Let's try to put an image here:

<div id="api-image"></div>

<script type="text/javascript">

const piwigoUrl = 'https://lwzorek.piwigo.com/ws.php?';  
// const piwigoUrl = 'http://localhost/tools/ws.php?';  
    // Define URL params for the Piwigo API request
    const urlParams = new URLSearchParams({ 
      format: 'json',
      method: 'pwg.images.getInfo',
      image_id: 22
      })

  // Function to send the request to the Piwigo API
  async function getImages() {
    try {
      // Send request to the Piwigo API
      const response = await fetch(piwigoUrl + urlParams.toString(), {
        mode:  'cors',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }      
      });
  
      // Parse the JSON response
      const data = await response.json();
  
      if (data && data.result && data.result.images) {
        // Iterate over the images in the response
        data.result.images.forEach(image => {
          console.log(`Image: ${image.name}, URL: ${image.url}`);
        });
      } else {
        console.log('No images found or error in response');
      }
  
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }
  
  // Call the function to fetch images
  getImages();

</script>