---
title: Artists
layout: base
date: 2019-10-05
---

<script src="https://cdnjs.cloudflare.com/ajax/libs/js-yaml/4.1.0/js-yaml.min.js"></script>


<div id="project-container"></div>


<script>
    document.addEventListener("DOMContentLoaded", function () {
        // Function to get query string parameters
        function getQueryParam(param) {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get(param);
        }

        // Get the parameter from the query string (e.g., ?project=example)
        const projectParam = getQueryParam("project_id");

        if (projectParam) {
            // Fetch the projects.yml file
            fetch("/_data/projects.yml")
                .then((response) => response.text())
                .then((yamlText) => {
                    // Parse YAML to JSON
                    const projects = jsyaml.load(yamlText);
                    console.log("Projects data:", projects);

                    // Check if projects is an object or an array
                    const projectsArray = Array.isArray(projects)
                        ? projects
                        : Object.values(projects);

                    // Debugging: Log the query parameter and data
                    console.log("Query parameter (project_id):", projectParam);
                    console.log("Projects array:", projectsArray);

 

                    // Filter the data based on the query string parameter
                    const filteredProject = projectsArray.find((project) => {
                        // Ensure both values are strings and trimmed
                        const projectId = project.album_id.toString().trim();
                        const queryId = projectParam.trim();

                        console.log(`Comparing projectId: "${projectId}" with queryId: "${queryId}"`);
                        return projectId === queryId;
                    });

                    // Display the filtered data on the page
                    if (filteredProject) {
                        const container = document.getElementById("project-container");
                        container.innerHTML = `
                            <h2>${filteredProject.artist}</h2>
                            <p>${filteredProject.short_desc}</p>
                        `;
                    } else {
                        console.error("Project not found");
                    }
                })
                .catch((error) => {
                    console.error("Error fetching or parsing YAML:", error);
                });
        } else {
            console.error("No project parameter provided in the query string");
        }
    });

</script>