---
---
// Define the Piwigo API URL and the URL string
const piwigoUrl = '{{ site.piwigo.api_url | default: "http://localhost:3000?" }}';
const piwigoBaseUrl = '{{ site.piwigo.api_url | default: "http://localhost:3000" | remove: "?" }}';
const urlString = window.location.search; // Gets the query string part of the URL


async function populateImages() {
  // Select all elements with the 'data-pic' attribute
  const elements = document.querySelectorAll("[data-pic]");

  // Check if there are any elements to process
  if (elements.length === 0) {
    console.warn("No elements with the 'data-pic' attribute found. Stopping image processing.");
    return; // Stop further execution
  }

  console.log("Found elements:", elements);

  elements.forEach((element) => {
    const picId = element.getAttribute("data-pic");
    console.log("Processing element with picId:", picId);
    
    const apiUrl = `${piwigoBaseUrl}/ws.php?method=pwg.images.getInfo&image_id=${picId}&format=json`;

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.stat === "ok") {
          const smallImageUrl = data.result.derivatives.small.url;

          // Check the parent tag of the element
          const parentTag = element.tagName.toLowerCase();

          if (parentTag === "div") {
            console.log("Parent is a <div>");
            // If the parent is a <div>, set the background image
            element.style.backgroundImage = `url('${smallImageUrl}')`;
            element.style.backgroundSize = "cover";
            element.style.backgroundPosition = "center";
          } else if (parentTag === "img") {
            // If the parent is an <img>, set the src attribute
            element.setAttribute("src", smallImageUrl);
          } else {
            console.warn(`Unhandled parent tag: ${parentTag}`);
          }
        } else {
          console.error("Error fetching image:", data.message);
        }
      })
      .catch(error => {
        console.error("Error fetching image:", error);
      });
  });
}


// Function to get images from the Piwigo API
async function getImage(imageId) {
    const apiParams = new URLSearchParams({
        format: 'json',
        method: 'pwg.images.getInfo',
        image_id: imageId,
    });

    try {
        const response = await fetch(piwigoUrl + apiParams.toString(), {
        method: 'GET',
        });

        console.log("image call:" + piwigoUrl + apiParams.toString());

        const data = await response.json();

        if (data && data.result) {
            return data.result;        
        } else {
            console.log('No IMAGE found or error in response');
            return [];
        }
    } catch (error) {
        console.error('Error fetching images:', error);
        return [];
    }
}



// Function to load the header image
async function loadHeaderImage() {
  
  // Find imageID
  const urlString = window.location.search; // Gets the query string part of the URL
  const urlParams = new URLSearchParams(urlString);

  // Get the value of the 'project_id' parameter
  let imageId = urlParams.get('imageId');

  if (imageId) {
    console.log(`imageID via URL: ${imageId}`);
  } else {
    console.log('No imageId provided to loadHeaderImage...');
  } 
  
  // Check if the page YML via JSON defines a header image ID
  if (!imageId && pageData.headerImageId) {
      imageId = pageData.headerImageId;
      console.log(`from pageData.headerImageId, Image ID: ${imageId}`);
  } else {
    console.log('No image_id parameter found in YAML header');
  }

  // If we have an imageId, fetch the image and set it as the background of the jumbotron
  if (imageId) {
      console.log(`Image ID: ${imageId}`);
      // Fetch the image and set it as the background of the jumbotron
      // Call the getImage function to fetch the image details
      console.log("getting hero...");
      const image = await getImage(imageId);
      const jumbotronElement = document.querySelector('.jumbotron');
      if (jumbotronElement) {
        const imageUrl = image.element_url;
        jumbotronElement.style.backgroundImage = `url('${imageUrl}')`;
        jumbotronElement.style.backgroundSize = 'cover';
        jumbotronElement.style.backgroundPosition = 'center';
      }
  } 
}




document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById('dark-mode-toggle');
  const body = document.body;

  function updateToggle() {
    if (body.classList.contains('dark-mode')) {
      toggle.textContent = "☀️ Light";
    } else {
      toggle.textContent = "🌙 Dark";
    }
  }

  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    body.classList.toggle('dark-mode');
    updateToggle();
  });

  updateToggle(); // Set initial state

    populateImages(); // Call the function to load images
    loadHeaderImage(); // Call the function to load the header image

    
    function resizeImages() {
      console.log("resizing images...");
      const carouselImages = document.querySelectorAll('#gallery img');
  
      carouselImages.forEach(img => {
        img.onload = () => {
          const aspectRatio = img.naturalWidth / img.naturalHeight;
  
          if (aspectRatio > 1) {
            img.style.width = '100%';
            img.style.height = 'auto';
          } else {
            img.style.width = 'auto';
            img.style.height = '100%';
          }
  
        };
      });
    }
  });