---
layout: base
title: Gallery
---

{::nomarkdown}
</div> <!-- close container for bg work-->
{:/nomarkdown}

<div id="listings-data" style="display: none;">
  {% for page in site.pages %}
    {% if page.album-id %}
      <div class="listing-item" 
        data-album-id="{{ page.album-id }}" 
        data-url="{{ page.url }}"
        data-artist="{{ page.artist }}">
        {{ page.title }}
      </div>
    {% endif %}
  {% endfor %}
</div>


<script>
// Function to create a JSON object for album IDs
function createAlbumIdMap() {
  const listingsData = document.getElementById('listings-data');
  const listingItems = listingsData.querySelectorAll('.listing-item');

  // Create an empty object to store album IDs and their URLs
  const albumIdMap = {};

listingItems.forEach(item => {
    const albumId = item.getAttribute('data-album-id');
    const url = item.getAttribute('data-url');
    const artist = item.getAttribute('data-artist');
    console.log(`Album ID: ${albumId}, URL: ${url}, Artist: ${artist}`);

    // Add the album ID and an object with url and artist to the map
    albumIdMap[albumId] = {
        url: url,
        artist: artist
    };
});

  // Log the JSON object for debugging
  console.log(albumIdMap);

  // Return the JSON object
  return albumIdMap;
}

// Call the function to create the album ID map
albumIdMap = createAlbumIdMap();
</script>

<div id="galleryContainer" class="justified-gallery" style="min-height:100vh;">
<div id="gallery-loading" style="display:flex;justify-content:center;align-items:center;height:80vh;">
  <div class="spinner-border text-secondary" role="status">
    <span class="visually-hidden">Loading...</span>
  </div>
</div>
</div>

<script type="text/javascript">
  const piwigoUrl = 'http://localhost:3000?'; // Update with your Piwigo API URL

  // Define URL params for the Piwigo API request
  const apiParams = new URLSearchParams({
    format: 'json',
    method: 'pwg.categories.getImages'
  });


function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function getUrlTagParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get('tag');
}



async function displayGalleryWithTag(tag) {
  const galleryContainer = document.getElementById('galleryContainer');
  galleryContainer.innerHTML = `
    <div id="gallery-loading" style="display:flex;justify-content:center;align-items:center;height:80vh;">
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `;

  // Build API params for tag search
  const tagApiParams = new URLSearchParams({
    format: 'json',
    method: 'pwg.tags.getImages',
    tag_name: tag
  });

  try {
    const response = await fetch(piwigoUrl + tagApiParams.toString(), { method: 'GET' });
    const data = await response.json();
    console.log(data)

    if (data && data.result && data.result.images) {
      const images = data.result.images;
      if (images.length === 0) {
        galleryContainer.innerHTML = `<p style="text-align:center;">No images found for tag: <strong>${tag}</strong></p>`;
        return;
      }

      // Shuffle and limit images if desired
      const shuffledImages = fisherYatesShuffle(images);
      const randomImages = shuffledImages.slice(0, 100);

      galleryContainer.innerHTML = ''; // Clear loading spinner

      randomImages.forEach(image => {
        const albumIdToCheck = image.categories[0]?.id;
        // TODO: need to get albumID from api separately here
        // b/c it doesn't come with tags.getimages call
        // or, could link to proxy url that would get image data and redirect to project page
        if (albumIdMap[albumIdToCheck]) {
          const albumInfo = albumIdMap[albumIdToCheck];
          if (albumInfo) {
            const projectUrl = albumInfo.url;
            const artist = albumInfo.artist;
            const linkElement = document.createElement('a');
            linkElement.href = projectUrl + '?imageId=' + image.id;
            linkElement.setAttribute('data-lg-size', `${image.width}-${image.height}`);
            linkElement.setAttribute('data-sub-html', `${artist}`);
            const imgElement = document.createElement('img');
            imgElement.src = image.derivatives.xsmall.url;
            imgElement.alt = image.name;
            imgElement.setAttribute('loading', "lazy");
            linkElement.appendChild(imgElement);
            galleryContainer.appendChild(linkElement);
          }
        }
      });

      // Optionally, initialize LightGallery here if needed
    } else {
      galleryContainer.innerHTML = `<p style="text-align:center;">No images found for tag: <strong>${tag}</strong></p>`;
    }
  } catch (error) {
    galleryContainer.innerHTML = `<p style="text-align:center;">Error loading images for tag: <strong>${tag}</strong></p>`;
    console.error('Error fetching images by tag:', error);
  }
}




  // Function to fetch random images and display them using LightGallery
  async function displayGallery() {
    try {
      // Fetch images from the Piwigo API
      const response = await fetch(piwigoUrl + apiParams.toString(), {
        method: 'GET'
      });
      const data = await response.json();

      if (data && data.result && data.result.images) {
        const images = data.result.images;

        // Shuffle the images array to display random images
        const shuffledImages = fisherYatesShuffle(images);

        // Select a subset of random images (e.g., 10 images)
        const randomImages = shuffledImages.slice(0, 100);

        const galleryContainer = document.getElementById('galleryContainer');
        galleryContainer.innerHTML = ''; // Clear any existing content

        // Create LightGallery structure
        randomImages.forEach(image => {
          console.log("image id: " +  image.categories[0]?.id)
          
          // Determine if we have a page with corresponding projectID
          const albumIdToCheck = image.categories[0]?.id; 
            if (albumIdMap[albumIdToCheck]) {          

              const albumInfo = albumIdMap[albumIdToCheck];
              if (albumInfo) {
                const projectUrl = albumInfo.url;
                const artist = albumInfo.artist;
                console.log(`Album ID ${albumIdToCheck} exists. URL: ${projectUrl}, Artist: ${artist}`);
                const linkElement = document.createElement('a');
                linkElement.href = projectUrl + '?imageId=' + image.id;
                linkElement.setAttribute('data-lg-size', `${image.width}-${image.height}`);
                // You can use artist in the caption or elsewhere:
                linkElement.setAttribute('data-sub-html', `${artist}`);
                const imgElement = document.createElement('img');
                imgElement.src = image.derivatives.xsmall.url;
                imgElement.alt = image.name;
                imgElement.setAttribute('loading', "lazy");
                linkElement.appendChild(imgElement);
                galleryContainer.appendChild(linkElement);
              }

            } else {
              console.log(`Album ID ${albumIdToCheck} does not exist.`);
            }                
        });

        // Initialize LightGallery

      } else {
        console.log('No images found or error in response');
      }
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  }

const tag = getUrlTagParam();
if (tag) {
  displayGalleryWithTag(tag);
} else {
  displayGallery();
}

</script>