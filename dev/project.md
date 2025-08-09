---
layout: base
title: Project
subtitle:
author: Fred Gibbs
date: 2024-10-28
---


{% include jumbotron.html 
image-url = ""
title = ""
text = ""
%}

<div id="project-desc"></div>

<div id="carousel" class="carousel slide">
  <div id="carousel-inner" class="carousel-inner">
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div id="gallery"></div>




<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>

<script src="https://cdn.jsdelivr.net/npm/showdown/dist/showdown.min.js"></script>

<script type="text/javascript">

// use cases

// 1: an image id will be passed in from gallery
// use api to get top-level category from image
// use api to get representative image_id 
// use api to get image
// replace jumbotron bg-image tag

// 2: a project id (maybe from artist page)
// use api to get representative image_id
// use api to get image 
// replace jumbotron bg-image tag

// 3: project is also a winning project
// page needs to see if that's true from winners.yml
// if so, display extra data

const piwigoUrl = 'http://localhost:3000?';      // Define URL params for the Piwigo API request
const urlString = window.location.search; // Gets the query string part of the URL
const urlParams = new URLSearchParams(urlString);

// Get the value of the 'project_id' parameter
const albumId = urlParams.get('album_id'); 

// Get the value of the 'project_id' parameter
const imageId = urlParams.get('image_id');

// Get the name and title from the query string (e.g., ?name=Ada%20Trillo&title=La%20Caravana%20Del%20Diablo)
const nameParam = urlParams.get("name");
const titleParam = urlParams.get("title");

  if (nameParam && titleParam) {
    // Fetch the artists.yml file
    fetch("/_data//artists.yml") // Replace with the actual path to your YAML file
        .then((response) => response.text())
        .then((yamlText) => {
            // Parse YAML to JSON
            const data = jsyaml.load(yamlText);

            // Ensure the data is an array
            const artistsArray = Array.isArray(data) ? data : Object.values(data);

            // Find the artist by name
            const artist = artistsArray.find(
                (artist) => artist.name.trim().toLowerCase() === nameParam.trim().toLowerCase()
            );

            if (artist) {
                // If the artist has multiple titles, find the matching title
                const matchingTitle = artist.title
                    ? artist.title.trim().toLowerCase() === titleParam.trim().toLowerCase()
                    : null;

                if (matchingTitle) {
                    console.log(`Found artist: ${artist.name}`);
                    console.log(`Found title: ${titleParam}`);

                    // Display the artist and title information on the page
                    const container = document.getElementById("title-container");
                    container.innerHTML = `
                        <!-- <h2>${artist.name}</h2>
                        <h3>${titleParam}</h3>
                        <p>${artist.short_desc || "No short description available."}</p> -->
                        <p>${artist.long_desc || "No long description available."}</p>
                    `;
                } else {
                    console.error(`No matching title found for ${titleParam}`);
                }
            } else {
                console.error(`No artist found with the name ${nameParam}`);
            }
        })
        .catch((error) => {
            console.error("Error fetching or parsing YAML:", error);
        });
} else {
    console.error("Name or title parameter is missing in the query string");
}


  if (albumId) {
    console.log(`Album ID: ${albumId}`);

    // Fetch the projects.yml file
    fetch('/_data/artists.yml') // Replace with the actual path to your YAML file
      .then(response => response.text())
      .then(yamlText => {
        // Parse YAML to JSON
        const data = jsyaml.load(yamlText);

        // Ensure the data is an array
        const artistsArray = Array.isArray(data) ? data : Object.values(data);

        // Loop through artists to find the project with the matching albumId
        let matchingProject = null;
        artistsArray.forEach(artist => {
          if (artist.projects) {
            const project = artist.projects.find(proj => proj.album_id == albumId);
            if (project) {
              matchingProject = { artistName: artist.name, ...project }; 
            }
          }
        });

        if (matchingProject) {
          const project = matchingProject;
          console.log('Project found:', project);

          // Update the page with project data
          const titleContainer = document.getElementById('project-title');          
          const shortDescContainer = document.getElementById('project-short-desc');
          const descContainer = document.getElementById('project-desc');

          if (titleContainer) {
            titleContainer.innerHTML = `${project.title}`;
          }

          if (shortDescContainer) {
              shortDescContainer.innerHTML = `${project.short_desc}`; 
          }

          // Convert the Markdown content to HTML
          const converter = new showdown.Converter();
          const html = converter.makeHtml(project.long_desc);

          if (descContainer) {
            descContainer.innerHTML = `
              <p>${html || 'No long description available.'}</p>
            `;
          }


          // get jumbotron image from project.image_id
          apiParams = new URLSearchParams({ 
          format: 'json',
          //method: 'pwg.images.getInfo',
          //image_id: 100
          method: 'pwg.images.getInfo',
          // image_id: project.image_id
          image_id: imageId // from URL params
          })


          // Function to send the request to the Piwigo API
          async function getImage() {
            try {
              // Send request to the Piwigo API
              const response = await fetch(piwigoUrl + apiParams.toString(), {
                method: 'GET'
              });

              console.log(piwigoUrl + apiParams.toString());
              
              // Parse the JSON response
              const data = await response.json();

              if (data && data.result) {
                // Dynamically update the background-image URL of the jumbotron
                const jumbotronElement = document.querySelector('.jumbotron'); // Ensure the jumbotron has a class or ID
                if (jumbotronElement) {
                    const imageUrl = data.result.element_url; // Replace with your actual image URL pattern
                    jumbotronElement.style.backgroundImage = `url('${imageUrl}')`;
                    jumbotronElement.style.backgroundSize = 'cover'; // Optional: Ensure the image covers the entire jumbotron
                    jumbotronElement.style.backgroundPosition = 'center'; // Optional: Center the image
                }
              } else {
                console.log('No IMAGE found or error in response');
              }

            } catch (error) {
              console.error('Error fetching images:', error);
            }
          }

          console.log("getting hero...")
          getImage();


        } else {
          console.error(`No project found with album_id: ${albumId}`);
        }
      })
      .catch(error => {
        console.error('Error fetching or parsing YAML:', error);
      });
  } else {
      console.log('No album_id parameter found in the URL');
  }



// Function to send the request to the Piwigo API
async function getImages() {
  
   // need to get jumbotron image from project.image_id
          apiParams = new URLSearchParams({ 
          format: 'json',
          //method: 'pwg.images.getInfo',
          //image_id: 100
          method: 'pwg.categories.getImages',
          cat_id: albumId
          })
  
  
  try {
    // Send request to the Piwigo API
    const response = await fetch(piwigoUrl + apiParams.toString(), {
      method: 'GET'
    });

    console.log(piwigoUrl + apiParams.toString());
    
    // Parse the JSON response
    const data = await response.json();


    if (data && data.result && data.result.images) {
      const galleryContainer = document.getElementById('gallery');
      galleryContainer.innerHTML = ''; // Clear any existing content


    // Iterate over the images in the response
    data.result.images.forEach((image,index) => {
      // Create an image element
      const imgElement = document.createElement('img');
      imgElement.src = image.derivatives.medium.url; // Use the medium-sized image URL
      imgElement.alt = image.name; // Set the alt text
      // Append the image to the gallery container
      galleryContainer.appendChild(imgElement);

      // Populate carousel items
      const carouselContainer = document.getElementById('carousel-inner');
      if (!carouselContainer) {
        console.error('Carousel container not found');
        return;
      }
 
      const carouselItem = document.createElement('div');
      carouselItem.className = "carousel-item";
      if (index === 0) {
        carouselItem.classList.add('active'); // Add 'active' class to the first item
      }

      const carouselImg = document.createElement('img');
      carouselImg.src = image.derivatives.medium.url; // Use the medium-sized image URL
      carouselImg.className = "d-block w-100"
      
      // Append the image to the gallery container
      carouselItem.appendChild(carouselImg);

      carouselContainer.appendChild(carouselItem);


      console.log(`Image: ${image.name}, URL: ${image.page_url}`);
      });
    } else {
      console.log('No images found or error in response');
    }

  } catch (error) {
    console.error('Error fetching images:', error);
  }
}




// Call the function to fetch images
console.log("getting images...")
getImages();


</script>

