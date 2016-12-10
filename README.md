# HackathonMD-12-09-2016

> By @ModernTek, @BruceLeeO, @Yyrcat, @Zesc 

## Overview

This repository contains our attempt at Project #2 of the [MD Hackathon Dec 9-11 2016](https://qa.moderndeveloper.com/t/teams-9-15-december-hackathon-project-details/2207). We have chosen the following eight UI elements to create:

- [Accordion](http://materializecss.com/collapsible.html)
- [Wave ](http://materializecss.com/waves.html)

## Usage

### Accordion

The accordion UI element is useful for condensing groups of content on a website into collapsed sections that can be expanded by the user when clicking its associated toggle button.

#### Structure

The HTML for this UI element is as follows:

```html
<div class="accordion">
  <div class="accordion-panel">
    <h1 class="accordion-toggle">First</h1>
    <div class="accordion-content">...</div>
  </div>
  <div class="accordion-panel">
    <h1 class="accordion-toggle">Second</h1>
    <div class="accordion-content">...</div>
  </div>
  <div class="accordion-panel">
    <h1 class="accordion-toggle">Third</h1>
    <div class="accordion-content">...</div>
  </div>
</div>
```

#### Assets

Make sure to also include the required CSS and JS in your web page and initialize it, like so:

```html
<html>
  <head>
    <link rel="stylesheet" href="./path/to/accordion.css">
  </head>
  <body>
    <div class="accordion">...</div>
    <script src="./path/to/accordion.js"></script>
    <script>accordion.init();</script>
  </body>
</html>
```


[View the demo](https://moderntek.github.io/HackathonMD-12-09-2016/#demo-wave)/#demo-accordion)


### Wave

[Description]

[Structure]

[Assets]

[View the demo](https://moderntek.github.io/HackathonMD-12-09-2016/#demo-wave)
