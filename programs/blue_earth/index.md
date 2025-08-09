---
layout: base
header-image-url: "/assets/images/Katherine+Jack-2.jpg"
header-caption: © Katherine Jack
header-position: 
---

# Blue Earth Fiscal Sponsorship
CENTER’s Blue Earth Fiscal Sponsorship program advances documentary projects that educate the public about critical environmental or social issues. Rather than providing funds directly, fiscal sponsorship allows artists to take advantage of CENTER’s 501(c)(3) status, enabling them to receive grants and donations from other organizations and individuals.   


## Current Sponsorships
As a non-profit organization with 501(c)(3) status, CENTER is eligible to receive grants and tax-deductible contributions from private foundations, individuals, or other entities. Please consider contributing to the following sponsored projects. 


<div class="row">
  {% assign blue_earth_pages = site.pages | where_exp: "p", "p.path contains 'programs/blue_earth/'" %}
  {% assign blue_earth_pages = blue_earth_pages | where_exp: "p", "p.path != page.path" %}
  {% for project in blue_earth_pages %}
  <div class="col-md-12 mb-12">
    <div class="card h-100">
    <a class="winner" href="{{ project.url }}">
    {% if project.header-image-id %}
      <div class="jumbotron program" 
      style="background-image: url('{{project.header-image-id}}');"
      data-pic = "{{ project.header-image-id }}">
      <div class="overlay">      
        <div class="title-row">{{ project.artist }}</div>
      </div>
    </div>
    {% endif %}
    <div class="card-body d-flex flex-column">
  <div>
    <h3 class="card-title">{{ project.title | default: project.project-title }}</h3>    
    <p class="card-text">{{ project.project-short-desc | truncatewords: 30 }}</p>
  </div>
  {% if project.donate-link %}
    <div class="d-flex justify-content-end mt-auto">
      <a href="{{ project.donate-link }}" class="btn btn-primary" target="_blank" rel="noopener">
        Donate Now
      </a>
    </div>
  {% endif %}
</div>
    </a>
  </div>
</div>
{% endfor %}
</div>



## HOW TO APPLY
Each year, we invite photographers and filmmakers to submit proposals of any geographic scope. Applications for 2025 are to be shared, please check back for information and deadlines. Selected projects may use this fiscal sponsorship to seek grants and tax-deductible donations. 

Those applying should be planning to seek funding during the coming year, and that planning should include public outreach to attract donors. Please note that those selected for sponsorship are solely responsible for identifying and sourcing their own funding and that CENTER itself does not provide funding through fiscal sponsorship.

## DONORS
Donations may be made online via the links below or by check to CENTER, PO Box 8372, Santa Fe, NM 87504 (please indicate the project you wish to support). Funds are then allocated to the earmarked project, less a small administrative fee.

Donors receive a letter of receipt with relevant charitable information, including our EIN number (85-0428041), for tax donation purposes.

{% include yml-to-json.html %}
