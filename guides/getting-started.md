---
layout: base
title: Getting Starting with Xanthan & GitHub Pages
subtitle: A preliminary guide to sustainable and extensible project websites
author: Fred Gibbs
date: 2019-10-03
---

# {{page.title}}

## {{page.subtitle}}

<!--
### Table of Contents
* TOC
{:toc}
-->


## How to use this guide
These instructions explain how a GitHub Pages site works. It describes files and folders in your repository as well as how individual files work. It will be useful to have these instructions open in a separate browser window as you view and edit files on your website.

Rather than coding or copying all files individually, 


## Build a website in 10 minutes
- Create an account at [GitHub](http://github.com/register). Make note of your GITHUB-USERNAME.
- Rather than create everything from scratch, start with a basic set of core files.  Go to the [xanthan repository](http://github.com/fredgibbs/xanthan)
- Click the green "Use this Template" button
- Name your repository, which we call REPOSITORY below. You can always rename it later or delete it and start over.
- Go into the settings menu (the gear menu on the right of the top nav bar)
- On the left, click the link for "Pages".
- Select / from master branch
- Note the URL that appears there in the form of http://GIHUB-USERNAME.github.io/REPOSITORY. Replace GITHUB-USERNAME with your GitHub username, and REPOSITORY with your repository name. Your final URL should loook like http://fwgibbs.github.io/xanthan
- Click on that URL, and you'll likely get a Page Not Found error.
- Wait a minute for GitHub to build your site, and refresh the page (Ctrl or Cmd R).

You've made a website!

---

## Basic Site Components
Let's check out the core files for your website. Go to your own repository at http://GITHUB-USERNAME.github.io/REPOSITORY. All of the files are important in their own way, but we're going to focus on the folders and files that most directly create our website.

### `_includes` directory
This directory hold files that are typically small bits of code (called snippets) that appear on more than one page, like a nav bar or footer. This way, if you want to change the footer on all your site pages, you can change it in just one spot.

### `_layouts` directory
This directory provides the basic templates for different kinds of pages. When you make a new page on your site, you will assign a layout to that page.

### `essays` directory
This directory could be named anything--it's just a place to put separate essays. You might have many of these directories for essays on different topics, like `historic sites`, `campus buildings`, etc.

### `guides` directory
This directory has code examples of how to make certain things on your site. You might keep this around while you're learning and building your site, but you can always delete it when you're done. All the documentation is also available at the main Xanthan site.


### "home" directory files
You'll notice that you have a few pages in the root directory of your repository, like `credits.md` and `about.md`. To understand more about pages and editing, move on to the [Editing your site](editing-your-site.md) guide.

---

