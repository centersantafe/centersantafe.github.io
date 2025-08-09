---
layout: base
title: Winners
subtitle:
author: Fred Gibbs
date: 2024-10-28
---


{% include jumbotron.html 
image-url = ""
title = ""
text = ""
%}


<div id="winners-gallery"></div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>

<script>
  async function displayAwardsGallery() {
    try {
      // Fetch the artists.yml file
      const response = await fetch('/_data/artists.yml'); 
      const yamlText = await response.text();

      // Parse YAML to JSON
      const artists = jsyaml.load(yamlText);

      // Create an object to store award-winning projects organized by year
      const projectsByYear = {};

      // Loop through each artist and their projects
      artists.forEach(artist => {
        if (artist.projects) {
          artist.projects.forEach(project => {
            // Only include projects with awards
            if (project.awards && project.awards.length > 0) {
              const year = project.year; // Get the year directly from the project

              // Initialize the year in the projectsByYear object if not already present
              if (!projectsByYear[year]) {
                projectsByYear[year] = [];
              }

              // Add the project and artist details to the year
              projectsByYear[year].push({
                title: project.title,
                artist: artist.name,
                albumId: project.album_id,
                imageId: project.image_id, // Use project's image_id for the thumbnail
                awards: project.awards // Include the awards for display
              });
            }
          });
        }
      });

console.log('Projects grouped by year:', projectsByYear);

      // Sort the years in descending order
      const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

     // Generate the gallery
const galleryContainer = document.getElementById('winners-gallery');
galleryContainer.innerHTML = ''; // Clear any existing content

for (const year of sortedYears) {
  // Create a header for the year
  const yearHeader = document.createElement('h2');
  yearHeader.textContent = year;
  yearHeader.classList.add('year-header');
  galleryContainer.appendChild(yearHeader);

  // Create a container for the projects under this year
  const yearContainer = document.createElement('div');
  yearContainer.classList.add('year-container');

  for (const project of projectsByYear[year]) {
    // Fetch the image details from the Piwigo API
    const piwigoUrl = `http://localhost:3000/ws.php?method=pwg.images.getInfo&image_id=${project.imageId}&format=json`;
    const imageResponse = await fetch(piwigoUrl);
    const imageData = await imageResponse.json();

    if (imageData && imageData.result && imageData.result.derivatives) {
      const thumbnailUrl = imageData.result.derivatives.small.url; // Use the small derivative for the thumbnail

      // Loop through each award and create a thumbnail for it
      for (const award of project.awards) {
        // Create a link for the project
        const linkElement = document.createElement('a');
        linkElement.href = `project?album_id=${project.albumId}`;
        linkElement.classList.add('project-link');

        // Create the thumbnail image
        const imgElement = document.createElement('img');
        imgElement.src = thumbnailUrl;
        imgElement.alt = award.title; // Use the award title as the alt text
        imgElement.classList.add('project-thumbnail');

        // Create a title overlay
        const titleOverlay = document.createElement('div');
        titleOverlay.textContent = award.title; // Display the award title
        titleOverlay.classList.add('title-overlay');

        // Append the image and overlay to the link
        linkElement.appendChild(imgElement);
        linkElement.appendChild(titleOverlay);

        // Append the link to the year container
        yearContainer.appendChild(linkElement);
      }
    }
  }

  // Append the year container to the gallery
  galleryContainer.appendChild(yearContainer);
}
    } catch (error) {
      console.error('Error fetching or processing the YAML file or Piwigo API:', error);
    }
  }

  // Call the function to display the awards gallery
  displayAwardsGallery();
</script>