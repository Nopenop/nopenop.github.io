# Notes for my portfolio websites

Set of notes that I will take during the creation of portfolio website.

## Difference between export and public keywords in Javascript/Typescript

public is a visibilty modifier - technically does nothing
private is used to set private

export means that the containing file is an external module

## Function Implementation is Missing or not immediately following the declaration

Ok, basically, I was missing the export

I would use export on the struct declaration, not necessarily just exporting the structure.

## HTML

Since I am going to build a website, I am going to need to relearn some html basics

### Tags

1. Heading: h1, h2, h3, h4, h5, h6
1. Paragraph: p
1. Line Break: br or br /
1. Center: center
1. Horizontal Rule Tag: hr or hr /
1. Preserve: pre
1. Non-breaking Space: pre
1. Unordered List: ul
1. Ordered List: ol
1. List Item: li
1. Generic: div

### What is an element?

Includes:

1. opening tag
1. content
1. closing tag

Example could be <p>Hello world</p>

You can have nested elements and there void elements including:

1. img
1. hr
1. br
1. source

### What is an attribute?

Special words that provide additional information to an HTML element. These are placed inside the element's
opening tag, and used to configure or adjust the element's behavior

These include a name: value pair.

#### Core Attributes

1. id: used to uniquely identify any element within HTML page or to distinguish between in-elements.
1. title: gives a suggested title for the element.
1. class: specifies one or more CSS classes for an HTML element.
1. style: inline CSS rules
1. dir: direction chat should flow, either ltr (left to right) or rtl (right to left)
1. lang: indicate main language used in a document

#### Bool Attributes

1. disabled
1. readonly
1. required
1. intert
1. autocomplete

#### Generic Attributes

1. align: right, left, center

## CSS

Yup, I need to review my CSS.

CSS is used to define styles fo rweb pages, including design, layout, and variations in display for different devices and screen sizes.

### CSS Syntax

CSS rule consists of a selector and a declaration block:

1. Select: this can either be an element, id, or class.
2. declaration: Set of parameters you would like to style.

### Selectors Continued

The selector is the beginning of any block in CSS. The most basic case is to use a single element selector. This can just be done by using the name of the element.

#### id selector

This is used to select a specific element by their id.

Use the "#" followed by the name of the id.

#### class selector

Used to select elements by their class.

Use the "." followed by the name of the class.

#### Grouping

There are several ways to logically group css rules, including:

1. *: selects all HTML elements on the page
1. ,: used to group selectors, including id, class, and element selectors.

## Interface Design

Basically, I am going to rip off dating apps for the design of my portfolio.
