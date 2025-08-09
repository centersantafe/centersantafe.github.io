---
title: Artists
layout: base
date: 2019-10-05
---

<div id="listings">

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>

<script>
    document.addEventListener("DOMContentLoaded", function () {
    // Fetch the artists.yml file
    fetch('/_data/artists.yml') // Replace with the actual path to your YAML file
    .then(response => response.text())
    .then(yamlText => {
        // Parse YAML to JSON
        const data = jsyaml.load(yamlText);

        // Ensure the data is an array
        const artistsArray = Array.isArray(data) ? data : Object.values(data);

        // Create a map to organize projects by year
        const projectsByYear = {};

        // Loop through artists and their projects
        artistsArray.forEach(artist => {
            if (artist.projects) {
                artist.projects.forEach(project => {
                    const year = project.year || 'Unknown Year';
                    if (!projectsByYear[year]) {
                        projectsByYear[year] = [];
                    }
                    projectsByYear[year].push({
                        ...project,
                        artistName: artist.name,
                        imageId: project.image_id,
                        albumId: project.album_id
                    });
                });
            }
        });

        // Get the container to display the projects
        const listingsContainer = document.getElementById('listings');
        listingsContainer.innerHTML = ''; // Clear any existing content

        // Sort years in descending order
        const sortedYears = Object.keys(projectsByYear).sort((a, b) => b - a);

        // Generate cards for each year
        sortedYears.forEach(year => {
            // Create a year header
            const yearHeader = document.createElement('h2');
            yearHeader.textContent = year;
            yearHeader.className = 'text-center my-4';
            listingsContainer.appendChild(yearHeader);

            // Create a row for the projects
            const row = document.createElement('div');
            row.className = 'row';

            // Add cards for each project in this year
            projectsByYear[year].forEach(project => {
                
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-4';

                const link = document.createElement('a');
                link.href = 'project?album_id=' + project.albumId +
                            '&image_id=' + project.imageId;

                const card = document.createElement('div');
                card.className = 'card h-100 shadow-sm';

                const imageContainer = document.createElement('div');
                imageContainer.className = 'image-container';

                const img = document.createElement('img');
                img.className = 'card-img-top';
                img.alt = project.title;
                img.setAttribute('data-pic', project.imageId);

                // Append the image to the container
                imageContainer.appendChild(img);

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body d-flex flex-column';

                //const projectTitle = document.createElement('h5');
                //projectTitle.className = 'card-title text-center';
                //projectTitle.textContent = project.title;

                //const projectDesc = document.createElement('p');
                //projectDesc.className = 'card-text text-muted';
                //projectDesc.textContent = project.short_desc;

                const artistName = document.createElement('h4');
                artistName.className = 'text-center mt-3';
                artistName.textContent = project.artistName;

                // Append elements to the card body
                //cardBody.appendChild(projectTitle);
                //cardBody.appendChild(projectDesc);
                cardBody.appendChild(artistName);

                // Append the image container and card body to the card
                card.appendChild(imageContainer);
                card.appendChild(cardBody);

                // Append the card to the column
                link.appendChild(card);

                col.appendChild(link);

                // Append the column to the row
                row.appendChild(col);
            });

            // Append the row to the listings container
            listingsContainer.appendChild(row);
        });

        // Dynamically load images using the Piwigo API
        const images = document.querySelectorAll("img[data-pic]");
        images.forEach((img) => {
            const picId = img.getAttribute("data-pic");

            // Replace with your Piwigo API endpoint and authentication details
            const apiUrl = `http://localhost:3000/ws.php?method=pwg.images.getInfo&image_id=${picId}&format=json`;

            fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.stat === "ok") {
                        // Use the small size URL from the API response
                        const smallImageUrl = data.result.derivatives.small.url;
                        img.setAttribute("src", smallImageUrl);
                    } else {
                        console.error("Error fetching image:", data.message);
                    }
                })
                .catch(error => {
                    console.error("Error fetching image:", error);
                });
        });
    })
    .catch(error => {
        console.error('Error fetching or parsing YAML:', error);
    });
    });
    </script>