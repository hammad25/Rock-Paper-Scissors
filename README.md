# Space Rock Paper Scissors
* [live link] of the project
## Project Overview
In this project I have taken the classic Rock Paper Scissor game and given it a space theme and storyline. The user i.e the solider, must fire a weapon from his spaceship control panel that consists of **Rock**, **Paper** and **Scissors**. He must defeat the enemy, the evil space army and bring peace to the galactic kingdom by winning two wars. The first war consists of 3 battle rounds and the second and final war. For the final war the user will only has 5 seconds to fire the selected weapon determining the fate of the galaxy.

![Demonstration of Site Responsiveness](documentation/readme-responsiveness.png)

## Table of contents:
* [**Space Rock Paper Scissors**](#Space-Rock-Paper-Scissors)
* [**Project Overview**](#project-overview)
* [**User stories:**](#user-stories)
* [**Design**](#design)
  * [**layout**](#layout) 
  * [**Typography**](#typography)  
  * [**Color Scheme:**](#color-scheme)
  * [**Wireframes:**](#wireframes)
* [**Current Features**](#current-features)
* [**Technology**](#technology)
* [**Testing**](#testing)
    * [***Code validation:***](#code-validation)
    * [***test cases***](#test-cases)
    * [**Fixed bugs:**](#fixed-bugs)
    * [**Supported screens**](#supported-screens)
* [**Deployment**](#deployment)
  * [**Gitpod**](#gitpod)
  * [**Github**](#github)
* [**Credits**](#credits)

## User Stories
* As a user I want to play Rock Paper Scissor.
* As a user I want to understand the rules of the game.
* As a user I want to be able to tell if I am winning or losing against the computer.
* As a user I want to be able to tell what option the computer chose against me.
* As a user I want to be able to reset the game if I lose.
* As a user I want to be able to see if I have won or lost the overall game against the computer.

## Design
### Layout
 * The layout is minimalistic and clean. A spaceship cockpit with user and computer display screens and control panel that represents the user weapon selection.

### Typography
![font](docs/font.png)
 * I have used a combination of different styles to convey the theme of space. Using a dark ominous spaceship cockpit background, green highlighted hovering elements i.e display screens and buttons.
 * I also used the font Orbitron very reminesent of the font we have seen and love in the star wars saga.
 * I have also used various galactic solider pngs through out the modals to convey the space storyline.

### Color Scheme
* The primary colors were inspired by the game background. I wanted to  emphasise the green since my first introduction to sci-fi was the the 1979 movie Alien.

![design](docs/color-scheme.png)

### Wireframes
* [Balsamiq](https://balsamiq.com/) was used to create the wireframes and here are the primary mock ups.

![Index-Page](docs/space-rps-wireframe.png)

## Current Features
* Rules button, so that any user about to play space RPS knows how to play the game.
* Add a sound on and off button to play music for the game background

![rules](docs/rules-button.png)

* Two display screens one for user choice and one for computer choice to be displayed.
* The outcome of every result to be displayed once that round is played under the display screens.
* User selection buttons displayed.
* Score displayed and updating with each round and reseting for the final battle.
* Pop up modals for different outcomes within the game

## Technology
*  [HTML:](https://www.w3.org/html/)  - HTML5 provided the content and the structure for the project. HTML was used to build the UI.

* [CSS:](https://www.w3.org/Style/CSS/) - CSS was used to style.CSS was used to manage the UI.

* [JavaSCript](https://en.wikipedia.org/wiki/JavaScript) - Used for the main interaction with the DOM.

* [Git](https://git-scm.com/) - Git was used to managing the code. Allowing me to create backups whenever significant changes were made to code by utilizing the gitpod terminal to commit to Git and Push to GitHub.

* [GitHub:](https://github.com/) - GitHub was used to externally store repository and site deployment.

## Testing
### Test cases
Through out the project I have carried out regular testing. Through console.log and Chrome developer tools.
* Play **Space Rock Paper Scissor**
![space](docs/space-rps-readme.png)
* Understand the game rules
![rules](docs/rules-modal.readme.png)
* Userr to be able to tell battle round outcomes
![score](docs/scores-readme.png)
![space](docs/game-result.png)
* Modals to navigate the outcome and result game
![losing](docs/losing-modal.png)
![space](docs/winning-modal.png)
![space](docs/gamelost-modal.png)
![space](docs/gamewon-modal.png)

### Code Validation
#### Snky Code Analysis
Snyk - [Snyk](https://snyk.io/) 
![](docs/js-validator.png)

#### CSS Markup Validation 
CSS - [W3C Markup Validation Service](https://validator.w3.org/) 
- Congratulations! No Error Found.
![](docs/css-validator.png)

#### HTML Markup Validation
HTML - [W3C Markup Validation Service](https://validator.w3.org/) 
- Document checking completed. No errors or warnings to show.
![](docs/html-validator.png)

### Fixed bugs
* When the selected weapon button was pressed the audio would not play again if pressed again until the audio had finished playing the whole sound.
* To solve this issue I added currentTime = 0 to the variable weaponSound, this resulted in the audio playing instantly every time the button was selected.

### Supported Screens
* Screen sizes 1024px and over are all compatible for the game
* Only screen sizes ipad, ipad pro and iphone X within Devtools have been used for the responsive size the game.

ipad

![](docs/ipad.png)

iphone X

![](docs/iphone.png)

## Deployment 
### GitHub
The project was deployed to GitHub pages using the following steps:
 1. Once logged in to **GitHub**, navigate to the site's [repository](https://github.com/hammad25/Space-RPS).
  2. Under repository name , click **Settings**.
  3. In the left sidebar, click **Pages** on the left-hand menu.
  4. Under "Source", select the **Main Branch** and hit **Save**.
  5. To see your published site, under **GitHub Pages**, click the site's URL.

### GitPod
In order to make a local copy of this application, you can clone it by typing the following command in your IDE Terminal:

- `git clone https://github.com/hammad25/Space-RPS.git`

Alternatively, if using Gitpod, you can [click here](https://gitpod.io/#https://github.com/hammad25/Space-RPS) to start a new Gitpod workspace on your account.

## Credits
* Rohit Sharma, my mentor for helping me understand concepts and as always reassuring me to trust the process and digest JavaScript at my own pace and not to compare myself with others.
* The slack community as always **Dave Horrocks** and **Jack Conroy** for taking out time to help me out.
* [Balsamiq](https://balsamiq.com/) was used to create the wireframes
* [Coolors](https://coolors.co/) - Used to create my colour palette.
* [font Awesome](https://fontawesome.com/) for the variours icons.