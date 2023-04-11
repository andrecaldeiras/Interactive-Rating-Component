# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/interactive-rating-component-zpBX29QZyf](https://www.frontendmentor.io/solutions/interactive-rating-component-zpBX29QZyf)
- Live Site URL: [https://andrecaldeiras.github.io/Interactive-Rating-Component/dist/](https://andrecaldeiras.github.io/Interactive-Rating-Component/dist/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS
- Pug

```pug
  .card__ratings(name="ratings")
      a.card__input 1
      a.card__input 2
      a.card__input 3
      a.card__input 4
      a.card__input 5
  button.card__button SUBMIT
```
```sass
@mixin title()
    color: $n--white
    font-size: 1.6rem
    margin: 5% 0
```
```js
for (const value of inputNumber) {
    value.addEventListener("click", function() {
        cleanValues();
        value.classList.toggle("card__input--selected");
        rating = value.textContent;
    });
}
```
