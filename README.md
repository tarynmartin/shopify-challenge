# The Shoppies

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


## Table of Contents

- [Brief Description](#brief-description)
- [How to use](#how-to-use)
- [Installation](#installation)
- [Functionality](#functionality)
- [Next Steps](#next-steps)
- [Acknowledgements and Resources](#acknowledgements-and-resources)

<!-- Brief Description -->

## Brief Description
This is an app that allows a user to search for movies by title and allows the user to nominate up to 5 movies for The Shoppies. Site is responsive and received 100 for accessibility through lighthouse.

## How to use
User searches for movies by title. When they see a movie they want to nominate, they click the nominate movie. When a movie is nominated, the nominate button for that movie is disabled. If they decided to remove a nomination, they can click on the remove button on the nominations list.

When a user reaches 5 nominations, a banner pops up telling them they can't add more and the nomination buttons disappear.

If a user leaves the page and returns, their previous nominations will be retrieved and displayed.

## Built With

- React 16
- CSS

## Installation

**Fork this repository:**

https://github.com/tarynmartin/shopify-challenge

**Clone your forked repository**

`git clone` and the copied URL

**Change into the directory and install the project dependencies**

`cd` into directory and run `npm install` for dependencies

### How to see the product

In terminal, go to the project directory and run 'npm start' to open the project in the browser. Have fun finding movies!

### Live version

[Deployed Site](https://taryn-shopify-challenge.herokuapp.com/)

## Functionality

### Searching for a movie, nominating a movie, removing nominations, and refreshing page and saving nominations
![main app functionality](./assets/main-functionality.gif)

### Reaching nomination limit, displaying banner and removal of nomination buttons
![nomination limit functionality](./assets/limit.gif)

## Next Steps
- Improve responsive design, especially for laptops
- Improve CSS/styling - change fonts, improve overall look of app
- Allow pagination of results, api only returns 10 matching movies, even when there are more; want a way for a user to see other matches
- Create a modal pop up so when a user clicks on a movie, they can see additional information about that movie
- Way to save list & share them with others

## Authors

👤 **Taryn Martin**
- Github: [tarynmartin](https://github.com/tarynmartin)
- LinkedIn: [Taryn](https://www.linkedin.com/in/tarynmartin919/)

## Acknowledgements and Resources

[Movie Database](http://www.omdbapi.com/) API used to retrieve movie info.

<!-- MARKDOWN LINKS & IMAGES -->

[contributors-shield]: https://img.shields.io/github/contributors/tarynmartin/shopify-challenge.svg?style=flat-square
[contributors-url]: https://github.com/tarynmartin/shopify-challenge/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/tarynmartin/shopify-challenge.svg?style=flat-square
[forks-url]: https://github.com/tarynmartin/shopify-challenge/network/members
[stars-shield]: https://img.shields.io/github/stars/tarynmartin/shopify-challenge.svg?style=flat-square
[stars-url]: https://github.com/tarynmartin/shopify-challenge/stargazers
[issues-shield]: https://img.shields.io/github/issues/tarynmartin/shopify-challenge.svg?style=flat-square
[issues-url]: https://github.com/tarynmartin/shopify-challenge/issues
