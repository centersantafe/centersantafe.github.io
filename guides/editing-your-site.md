---
layout: base
title: Editing your site
author: Fred Gibbs
date: 2019-10-03
---

# {{page.title}}

<!--
### Table of Contents
* TOC
{:toc}
-->

## Anatomy of a Page
To understand the basics of how pages work, let's edit your homepage, the `index.md` file. Open this file in your text editor.

### YAML headers
You'll notice the file begins with something like

``` markdown
---
title: Getting Started
layout: base
date: 2024-12-02
---
```

This is called a YAML header. All pages must have a similar metadata block at the very top, with the title customized for each page. For now, it is enough to know that this block of metadata tells GitHub Pages that it should be part of your website. **Be sure you have the 3 hyphens `---` before and after your metadata on their own lines**.

The index page uses the `base` layout.


### Markdown
One of the great features of GitHub Pages is that it allows you to write pages in Markdown rather than HTML. If you are new to Markdown, complete this [Markdown tutorial](https://www.markdowntutorial.com/). If you need syntax help, check out this [cheat sheet](https://www.markdownguide.org/cheat-sheet).

#### Previewing Markdown
If you want to write online and preview your Markdown text as you write, use [Dillinger](https://dillinger.io/). It saves your work as you go. When you are done writing, you can simply copy and paste your text from Dillinger into the edit window on GitHub.

---

## Editing your site
Let's work through the process of editing your site. All steps start from your repository home page.

### Editing a page
Let's make a simple change to the homepage (your `index.md` file).
- Click on the `index.md` file.
- Click on the edit icon (looks like a pencil)
- Make some change to the text.
- Hit the green Commit button near the bottom of the page.
- Wait a few minutes and refresh your webpage.

### Add a new page
- Click the Add file button
- Type in the filename, including a `.md` extension
- Hit the green Commit button near the bottom of the page

---

## Edit the navigation bar
- Click on the `_includes` directory
- Click on `nav.html`
- Click on the edit icon (looks like a pencil)
- Duplicate (via copy and paste) on of the lines that contains a link to a page on your site
- Replace the old link with the name of the page you just created but WITHOUT the `.md` extension
- Hit the green Commit button near the bottom of the page



## Edit the base template
Jekyll uses layouts and includes to reuse common components across your site
You'll notice in the YAML header for the index page, there is a line layout: base
Let's look at the base template, which of course is in the templates directory

This is the template for all your pages. Once you're more comfortable with templates, you can write your own, or find someone else's and modify it.


## Including Images
Images instructions are on [their own page](using-images).


## Other typographic features
Look in the `_includes` folder and you'll see a number of code snippets. These are all small chunks of code of HTML and the special language that Jekyll uses to help make pages more flexible. These make it easy to embed other things on your pages, like videos and pull quotes. They work the same way as do including images, although the parameters you'll set in the code snippets are naturally a little different.

All the include files that you might want to use are explained on the [code examples page](code).
