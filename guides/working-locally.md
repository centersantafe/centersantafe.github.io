---
layout: base
title: Working Locally with GitHub Pages
subtitle: Test on your own machine before committing
author: Fred Gibbs
date: 2024-12-02
---

# {{page.title}}

## {{page.subtitle}}

<!--
### Table of Contents
* TOC
{:toc}
-->

## Testing your site locally (without GitHub pages)
As your first developing your site, you might want see how changes look as you go. The only way to do this is to commit your  changes to GitHub and wait for it to rebuild your site. It works fine for small, infrequent updates, but any kind of testing or experimentation can get frustrating.

A much better option for learning and experimenting is to run your website on your computer. In other words, to run it _locally_ (as opposed to _remotely_ on the GitHub servers).

To do that, we use a few independent software applications that work together. They all do one thing very well, which makes installation a bit more work than just having everything bundled together, but it also makes everything work more effectively in the long run. You don't need to understand how all these work, and once they are installed you don't need to think about them very much.

These instructions outline exactly what to do. It looks like a lot of steps, but they are all simple and go quickly.

### Using the Command Line


#### Mac
These instructions are based on [these]()
```xcode-select --install```

```/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"```
A program called Homebrew helps us install some required software very easily.

- `brew install ruby`
GitHub pages uses an application called Jekyll to build websites. Jekyll is written in the Ruby programming language (which you don't need to know anything about), so it is necessary to install the Ruby language for Jekyll to run.

- `gem install jekyll`
Install the Jekyll applciation that turns our Markdown files and templates into a website.

- `gem install bundler`
This application called [Bundler](http://bundler.io) helps keep all the code required to run your website locally in sync with how it runs on GitHub. This prevents issues where your pages might appear a little differently or not at all as the code used at GitHub starts to differ from what you're running on your computer. It might be a long time before you notice any difference, but you will eventually. So it's worth taking a few minutes to avoid a very confusing problem later.

To tie your website to your GitHub website, we'll need the application that helps run GitHub, called git.
Install Git: https://git-scm.com/download/mac.


#### Windows
These instructions are based on [these](https://jekyllrb.com/docs/installation/windows/)
