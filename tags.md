---
title: Tags
layout: base
width: full
---

<h1 id="tag-page-title"></h1>

<!-- for each page with an album-id, copy YAML data to HTML -->
<div id="listings-data" style="display: none;">
  {% for page in site.pages %}
    {% if page.album-id %}
      <div class="listing-item" 
        data-album-id="{{ page.album-id }}" 
        data-url="{{ page.url }}"
        data-artist="{{ page.artist }}"
        data-title="{{ page.project-title }}">
        {{ page.title }}
      </div>
    {% endif %}
  {% endfor %}
</div>

<div id="tag-cloud">
  <div class="tagcloud-loading">
    <div class="spinner-border text-secondary" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</div>


<!-- Bootstrap Modal for Image Preview -->
<div class="modal fade" id="imageModal" tabindex="-1" aria-labelledby="imageModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="imageModalLabel">Image Preview</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body" style="text-align:center;">
        <img id="modalImage" src="" alt="">
        <div id="modalAlbumInfo" style="margin-top:1em;color:#888;"></div>
      </div>
    </div>
  </div>
</div>



<script type="text/javascript">

// Define the Piwigo API URL
const piwigoUrl = 'http://localhost:3000?'; // Replace with your proxy or direct API URL

// Define URL params for the Piwigo API request to fetch tags
const urlParams = new URLSearchParams({
  format: 'json',
  method: 'pwg.tags.getList'
});

// Function to fetch tags and display a tag cloud
async function getTagCloud() {
  try {
    // Send request to the Piwigo API
    const response = await fetch(piwigoUrl + urlParams.toString(), {
      method: 'GET'
    });

    // Parse the JSON response
    const data = await response.json();

    if (data && data.result && data.result.tags) {
      const tagContainer = document.getElementById('tag-cloud');
      tagContainer.innerHTML = ''; // Clear any existing content

      // Find the maximum and minimum tag counts for scaling font sizes
      const maxCount = Math.max(...data.result.tags.map(tag => tag.counter));
      const minCount = Math.min(...data.result.tags.map(tag => tag.counter));

      // Iterate over the tags and create elements for the tag cloud
      data.result.tags.forEach(tag => {
        const tagElement = document.createElement('a');
        tagElement.href = tag.url; // Link to the tag's page
        tagElement.textContent = tag.name; // Display the tag name
        tagElement.style.margin = '5px'; // Add spacing between tags

        // Scale font size based on the tag's usage count
        const fontSize = ((tag.counter - minCount) / (maxCount - minCount)) * 20 + 10; // Scale between 10px and 30px
        tagElement.style.fontSize = `${fontSize}px`;

        // Append the tag to the container
        tagContainer.appendChild(tagElement);
      });
    } else {
      console.log('No tags found or error in response');
    }

  } catch (error) {
    console.error('Error fetching tags:', error);
  }
}

// Call the function to fetch and display the tag cloud
//getTagCloud();




async function getTagIndex() {
  try {
    // Send request to the Piwigo API
    const response = await fetch(piwigoUrl + urlParams.toString(), {
      method: 'GET'
    });

    // Parse the JSON response
    const data = await response.json();

    if (data && data.result && data.result.tags) {
      const tagContainer = document.getElementById('tag-cloud');
      tagContainer.innerHTML = ''; // Clear any existing content

      // Group tags by their first letter
      const tagsByLetter = {};
      data.result.tags.forEach(tag => {
        const firstLetter = tag.name[0].toUpperCase(); // Get the first letter and convert to uppercase
        if (!tagsByLetter[firstLetter]) {
          tagsByLetter[firstLetter] = [];
        }
        tagsByLetter[firstLetter].push(tag);
      });

      // Sort the letters alphabetically
const sortedLetters = Object.keys(tagsByLetter).sort();

// Generate the index
sortedLetters.forEach(letter => {
  // Create a flex row for the letter and its tags
  const flexRow = document.createElement('div');
  flexRow.className = 'tag-index-row';

  // Create a heading for the letter
  const letterHeading = document.createElement('span');
  letterHeading.className = 'tag-index-letter';
  letterHeading.textContent = letter;

  // Create a container for the tags under this letter
  const tagList = document.createElement('div');
  tagList.className = 'tag-index-list';

  // Add each tag under the letter
  tagsByLetter[letter].forEach(tag => {
    const tagElement = document.createElement('a');
    tagElement.className = 'tag-index-link';
    tagElement.href = window.location.pathname + '?tagName=' + encodeURIComponent(tag.name);
    tagElement.textContent = tag.name;
    tagList.appendChild(tagElement);
  });

  flexRow.appendChild(letterHeading);
  flexRow.appendChild(tagList);
  tagContainer.appendChild(flexRow);
});
    } else {
      console.log('No tags found or error in response');
    }
  } catch (error) {
    console.error('Error fetching tags:', error);
  }
}

// Call the function to fetch and display the tag index
getTagIndex();


function getTagNameFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get('tagName');
}

async function displayGalleryForTag(tagName) {
  const galleryContainer = document.getElementById('tag-cloud');
  galleryContainer.innerHTML = `
    <div style="display:flex;justify-content:center;align-items:center;height:200px;">
      <div class="spinner-border text-secondary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  `;

  const apiParams = new URLSearchParams({
    format: 'json',
    method: 'pwg.tags.getImages',
    tag_name: tagName
  });

  try {
    const response = await fetch(piwigoUrl + apiParams.toString(), { method: 'GET' });
    const data = await response.json();

    if (data && data.result && data.result.images && data.result.images.length > 0) {
      galleryContainer.innerHTML = '';
      data.result.images.forEach(image => {
        const link = document.createElement('a');
        link.href = "#";
        link.style.display = "inline-block";
        link.style.margin = "8px";

        const img = document.createElement('img');
        img.src = image.derivatives?.small?.url || image.derivatives?.thumb?.url || image.element_url;
        img.alt = image.name || '';
        img.style.margin = '8px';
        img.style.maxWidth = '150px';
        img.style.maxHeight = '150px';
        img.style.borderRadius = '6px';

        link.appendChild(img);

/*
  // Add click event to fetch album/category and redirect
  img.addEventListener('click', async function() {
    try {
      // Fetch image info from Piwigo to get categories
      const infoParams = new URLSearchParams({
        format: 'json',
        method: 'pwg.images.getInfo',
        image_id: image.id
      });
      const response = await fetch(piwigoUrl + infoParams.toString(), { method: 'GET' });
      const data = await response.json();
      // Get the first category/album ID
      const albumId = data?.result?.categories?.[0]?.id;
      if (albumId && albumIdMap[albumId]) {
        // Redirect to the album/listing page
        window.location.href = albumIdMap[albumId].url + "?imageId=" + image.id;
      } else {
        alert('Album page not found for this image.');
      }
    } catch (error) {
      alert('Error fetching album info.');
      console.error(error);
    }
  });
*/

  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('imageModalLabel');
  const modalAlbumInfo = document.getElementById('modalAlbumInfo');

img.addEventListener('click', async function(e) {
  e.preventDefault();
  try {
    // Fetch image info from Piwigo to get categories
    const infoParams = new URLSearchParams({
      format: 'json',
      method: 'pwg.images.getInfo',
      image_id: image.id
    });
    const response = await fetch(piwigoUrl + infoParams.toString(), { method: 'GET' });
    const data = await response.json();
    const albumId = data?.result?.categories?.[0]?.id;
    const albumInfo = albumId && albumIdMap[albumId] ? albumIdMap[albumId] : null;

    // Set modal image and info using cached elements
    modalImage.src = image.derivatives?.large?.url || image.derivatives?.medium?.url || image.derivatives?.small?.url || image.element_url;
    modalImage.alt = image.name || '';
    modalTitle.textContent = image.name || 'Image Preview';
    modalAlbumInfo.innerHTML = albumInfo
      ? `Image by ${albumInfo.artist} from the series: <a href="${albumInfo.url}">${albumInfo.title || albumInfo.url}
      
      </a>`
      : 'Album info not found.';

    // Show the Bootstrap modal
    imageModal.show();
  } catch (error) {
    alert('Error fetching album info.');
    console.error(error);
  }
});

      galleryContainer.appendChild(link);

      });
    } else {
      galleryContainer.innerHTML = `<p style="text-align:center;">No images found for tag: <strong>${tagName}</strong></p>`;
    }
  } catch (error) {
    galleryContainer.innerHTML = `<p style="text-align:center;">Error loading images for tag: <strong>${tagName}</strong></p>`;
    console.error('Error fetching images by tag:', error);
  }
}


function createAlbumIdMap() {
  const listingsData = document.getElementById('listings-data');
  const listingItems = listingsData.querySelectorAll('.listing-item');

  // Create an empty object to store album IDs and their URLs
  const albumIdMap = {};

listingItems.forEach(item => {
    const albumId = item.getAttribute('data-album-id');
    const url = item.getAttribute('data-url');
    const artist = item.getAttribute('data-artist');
    const title = item.getAttribute('data-title');
    console.log(`Album ID: ${albumId}, URL: ${url}, Artist: ${artist}`);

    // Add the album ID and an object with url and artist to the map
    albumIdMap[albumId] = {
        url: url,
        artist: artist,
        title: title
    };
});

  // Log the JSON object for debugging
  console.log(albumIdMap);

  // Return the JSON object
  return albumIdMap;
}

let imageModal; // Declare globally (or at the top of your script)

// Only run after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  
  albumIdMap = createAlbumIdMap();

  const imageModalEl = document.getElementById('imageModal');
  imageModal = new bootstrap.Modal(imageModalEl);

const tagName = getTagNameFromUrl();
if (tagName) {
  document.getElementById('tag-page-title').textContent = `Tag: ${tagName}`;
  displayGalleryForTag(tagName);
}

});

</script>

