---
layout: base
title: Callanan Excellence in Teaching Award
header-image-url: "https://images.squarespace-cdn.com/content/v1/64598f7e21c8fa4bf436e45d/9bd9ed63-83a1-4618-bc3b-58e3ca68d8e5/Eric-Kunsman-NTID.jpg?format=2500w"
header-caption: "Image courtesy of RIT"
header-height: 80vh
header-position:
---

# Callanan Excellence in Teaching Award

Established in 1998, the annual Callanan Excellence in Teaching Award honors a high school, college, or postgraduate teacher's dedication and commitment to their students and the photographic field. Educators in all areas of photographic teaching are eligible, including but not limited to fine art, documentary, history, and criticism. Educators must be nominated by their student(s) or colleague(s) to be considered.

**Educators must possess** — a genuine passion for teaching, an ability to excite students to learn, respect for students as individuals, and an enduring artistic curiosity.

## Award Package

- $5,000 USD
- Professional Development Seminars access

**Deadline for nominations** — February 28, 2026, 11:59 PM.

[Nominate an Educator](https://docs.google.com/forms/d/e/1FAIpQLSfokalhdcKguY6FIePHypsKYsWpoF-xRlWRF6b68-Fa1A8ZtQ/viewform?usp=header) &nbsp;·&nbsp; [FAQs](/review-santa-fe/calls-for-entry-faqs)

## 2025 Recipient & 2026 Juror

**[Eric T. Kunsman](https://www.erickunsman.com/)** — Photographer, Book Artist, & Assistant Professor, Visual Communications Studies Department, [National Technical Institute for the Deaf, Rochester Institute of Technology (RIT)](https://www.rit.edu/ntid/)

> Transformative teaching arises not from curriculum alone but from moments when an educator's ethos fundamentally alters a student's understanding of possibility. I have witnessed how a single educator can irrevocably reshape a student's trajectory — not through instruction alone, but by recognizing and affirming their inherent worth.
>
> Reviewing this year's nominations reaffirmed this truth, with Eric Kunsman's dossier emerging as a masterclass in pedagogical devotion. The letters in his support paint a portrait of a teacher who invests not only in skills but in people — whether by learning American Sign Language to bridge communication barriers, funding thesis exhibitions during a pandemic, or transforming his personal studio into a sanctuary for experimentation. These acts transcend generosity; they reflect a profound understanding of education as a covenant that persists long after a semester concludes.
>
> — Kathleen Sanker, 2024 Recipient and 2025 Juror

### From the nominations

- "Eric's pedagogy is rooted in enabling students to realize artistic expression and thus live artful lives."
- "Eric is always there for you as a student, giving up his free time and allowing students to access his personal studio space. Constantly providing insight and feedback to help push your creative vision."
- "He doesn't just uplift his students — he uplifts the field itself."
- "He treats students as colleagues, not subordinates."
- "Prior to teaching at NTID, he did not know how to sign, a necessity for communicating with his deaf students. He quickly became fluent in American Sign Language; none of my other professors ever bothered to learn how to sign, despite the large population of deaf students."
- "Eric's teachings are carried into my own classroom."

## Previous Recipients

{% assign teaching_winners = site.pages | where: "award", "Callanan Excellence in Teaching Award" | sort: "project-year" | reverse %}
{% for w in teaching_winners %}
  {% assign link = "/archive/listings/" | append: w.project-year | append: "/" | append: w.artist | replace: ' ', '-' | downcase | append: ".html" %}
  {% include card-winner.html
    height = "50vh"
    artist = w.artist
    year = w.project-year
    header-image-id = w.header-image-id
    link = link
    hide-award = true
  %}
{% endfor %}

- **2024** — Kathleen Sanker · Artist, Photographer, and Professor of Art, St. Charles Community College — St. Louis, Missouri, USA
- **2023** — Alanna Styer · Documentary Artist, Educator, Activist, Photographer's Green Book; Program Manager, Media Arts Education and Mentoring, Venice Arts — Los Angeles, California, USA
- **2022** — Uche Okpa-Iroha · Visual Artist, Art and Culture Producer, Art Educator, Independent Curator, Mentor; Founder and Director, The Nlele Institute — Lagos, Nigeria
- **2021** — Peter Brown · Photographer and Instructor, Glasscock School of Continuing Studies, Rice University — Houston, Texas, USA
- **2020** — Frank Lopez · Photographer and Teacher, Greenhill School — Addison, Texas, USA
- **2019** — Tony Chirinos · Artist, Photographer, and Associate Senior Professor of Photography, Miami Dade College — Miami, Florida, USA
- **2017** — Cig Harvey · Maine Media College, Anderson Ranch, Santa Fe Photographic Workshops — Maine, USA
- **2015** — Joe Johnson · Head of Photography Department, University of Missouri; Lecturer at Carnegie Mellon, Indiana University, MassArt, Rhode Island College, DeCordova Museum, and the Beach Museum — Missouri, USA
- **2014** — Aline Smithson · CENTER Workshop Instructor; Fine Art Department Instructor, Los Angeles Center of Photography — Los Angeles, California, USA
- **2013** — Jessamyn Lovell · Art Department Senior Lecturer, University of New Mexico — Albuquerque, New Mexico, USA
- **2012** — Stephan Hillenbrand · Associate Professor, University of Houston — Houston, Texas, USA
- **2011** — Kerry Skarbakka · Syracuse University — Syracuse, New York, USA
- **2010** — Sean Kernan · Savannah College of Art and Design, Maine Photo Workshops, Santa Fe Photographic Workshops, and The Art Center — Pasadena, Connecticut, USA
- **2009** — Archy Baker LaSalle · Cambridge Rindge and Latin High School — Massachusetts, USA
- **2008** — Patrick Hebert · Instructor, Art Center College of Design, CA; Associate Director of Education, AIDS Project — Los Angeles, California, USA
- **2007** — Joan Dooley · Bell School of Humanities Academy — Los Angeles, California, USA
- **2006** — John Weiss · Professor of Art, University of Delaware — Newark, Delaware, USA
- **2005** — Rose Marasco · Professor of Art, University of Southern Maine — Portland, Maine, USA
- **2004** — Lauren Shaw · Associate Professor, Emerson College — Boston, Massachusetts, USA
- **2003** — Susan Kae Grant · Professor of Photography, Texas Woman's University — Denton, Texas, USA
- **2002** — Don Gregorio Anton · Humboldt State University — Arcata, California, USA
- **2001** — Joleen Mahoney Roe · Bethlehem Central High School — Delmar, New York, USA
- **2000** — Catherine Angel · Associate Professor, University of Nevada — Las Vegas, Nevada, USA
- **1998** — Eddie Soloway · Instructor, Santa Fe Photographic Workshops; National Geographic Presenter — Santa Fe, New Mexico, USA

## Supporter

Thanks to a generous anonymous donor, the Callanan Excellence in Teaching Award provides recognition and financial support to a photographic educator annually. Thank you to all of those who have helped to recognize the unsung heroes of photographic education by nominating for the Callanan Excellence in Teaching Award.

{% include yml-to-json.html %}
