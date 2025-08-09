// Define the Piwigo API URL and the URL string
const piwigoUrl = 'http://localhost:3000?'; // Define URL params for the Piwigo API request
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
    
    const apiUrl = `http://localhost:3000/ws.php?method=pwg.images.getInfo&image_id=${picId}&format=json`;

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

    // Check if pageData exists
    if (typeof pageData === 'undefined') {
        console.warn('pageData is not defined. Stopping script execution.');
        return; // Stop the script gracefully
    }

    // Check if the page defines an album ID
    // this creates an image gallery separate from carousel
    if (pageData.albumId) {
        const albumId = pageData.albumId;
      console.log(`Album ID: ${albumId}`);
  
      async function getImages() { 
        const apiParams = new URLSearchParams({
          format: 'json',
          method: 'pwg.categories.getImages',
          cat_id: albumId,
        });
  
        try {
          const response = await fetch(piwigoUrl + apiParams.toString(), {
            method: 'GET',
          });
  
          console.log(piwigoUrl + apiParams.toString());
  
          const data = await response.json();
  if (data && data.result && data.result.images) {
  // --- Carousel ---
  const carouselContainer = document.getElementById('carousel-inner');
  if (!carouselContainer) {
    console.error('Carousel container not found');
    return;
  }
  carouselContainer.innerHTML = ''; // Clear previous items

  data.result.images.forEach((image, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.className = "carousel-item";
    if (index === 0) {
      carouselItem.classList.add('active');
    }

    const carouselImg = document.createElement('img');
    carouselImg.src = image.derivatives.medium.url;
    carouselImg.className = "d-block w-100";

    // --- Image caption ---
    const captionDiv = document.createElement('div');
    captionDiv.className = "carousel-caption d-none d-md-block";
    captionDiv.innerHTML = `
      <h5>${image.name || ''}</h5>
      <p>${image.comment || ''}</p>`;

    carouselItem.appendChild(carouselImg);
    carouselItem.appendChild(captionDiv);
    carouselContainer.appendChild(carouselItem);
  });

  // --- Gallery ---
  const galleryContainer = document.getElementById('gallery');
  galleryContainer.innerHTML = '';

  data.result.images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image.derivatives.medium.url;
    imgElement.alt = image.name;
    imgElement.className = "gallery-thumb";
    imgElement.setAttribute('data-index', index);
    galleryContainer.appendChild(imgElement);
  });

  // --- Add event listeners to gallery thumbnails ---
  document.querySelectorAll('.gallery-thumb').forEach(thumb => {
    thumb.addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-index'), 10);
      const carousel = document.getElementById('carousel');
      if (carousel) {
        const bsCarousel = bootstrap.Carousel.getOrCreateInstance(carousel);
        bsCarousel.to(idx);
      }
    });
  });
}
else {
            console.log('No images found or error in response');
          }
        } catch (error) {
          console.error('Error fetching images:', error);
        }
      }
  
      console.log("getting images...");
      getImages();
    } else {
      console.log('No album_id parameter found in YAML header');
    }
  
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