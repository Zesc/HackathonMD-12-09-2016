# HackathonMD-12-09-2016

> By @ModernTek, @BruceLeeO, @Yyrcat, @Zesc 

## Overview

This repository contains our attempt at Project #2 of the [MD Hackathon Dec 9-11 2016](https://qa.moderndeveloper.com/t/teams-9-15-december-hackathon-project-details/2207). We have chosen the following eight UI elements to create:

- [Collapsible/Accordion](http://materializecss.com/collapsible.html)
- [Wave](http://materializecss.com/waves.html)
- [Dropdown](http://materializecss.com/dropdown.html)
- [Pagination](http://materializecss.com/pagination.html)
- [Carousel](http://materializecss.com/carousel.html)
- [Scalling](http://materializecss.com/media.html)
- [Forms](http://www.material-ui.com/#/components/paper)
- [Radios/Checkboxes](Http)

## Usage

### Collapsible: Accordion and Expandable.

The accordion UI element is useful for condensing groups of content on a website into collapsed sections that can be expanded by the user when clicking its associated toggle button.
There are two ways a collapsible can behave. It can either allow multiple sections to stay open, or it can only allow one section to stay open at a time, which is called an accordion

#### Structure

The HTML for this UI element is as follows:

```html
<section class="accordion">
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
  </section>
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
  </body>
</html>
```


[View the demo](https://moderntek.github.io/HackathonMD-12-09-2016/#demo-accordion)

### Wave

This an attempt to create ink effect outlined in Material Design.

####Structure
The HTML for this ui as follows.
There eight check boxes. When user clicked on button, riiple effect appeared.

```html
<section class="accordion">
    <div class="button">      
        <div class="title">Wave</div>
        <div>
            <input type="checkbox" id="check-1">
            <label for="check-1"></label>
        </div>
</section>    
```               		     

####Assets
Make sure to also include the required CSSin your web page and initialize it, like so:

```html
<html>
  <head>
    <link rel="stylesheet" href="./path/to/wave.css">
  </head>
  <body>
    <section class="wave">...</div>
  </body>
</html>
```

[View the demo](https://moderntek.github.io/HackathonMD-12-09-2016/#demo-wave)
