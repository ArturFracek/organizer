# Organizer

[![Organizer](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/g42uwf&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/v3ww2g/runs/3/overview)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b579256de9794b9dadf521dded359088)](https://app.codacy.com/gh/ArturFracek/organiser/dashboard)

<p align="center"><code><img alt="Organizer logo" height="110" title="Organizer Logo" src="client/src/assets/LOGO.png"><img alt="MEVN logo" height="110" title="MEVN logo" src="client/src/assets/mevnLogo.png"></code></p>

<b>Organizer</b> is an app that allows to make a personal, well suited weekly and daily routines based on user's activities. The app's aim is to help user plan future in higly time controling order. The following task can be obtained by using Organizer [features](#features):

1. **Set a personal goal**, describe it, give it a priority number, and supossed (editable) deadline.
2. **Create a routine**, give it an appropriate name, and include in the description your own thoughts and tips for later. You can treat the description section as a notebook in the future. In addition, don't forget to priortize it so that you can more easily value what you do.
3. **Add activities that you will do periodically in your routines**. Just like a routine, think about and choose how much of a priority an activity is for you.
4. **Go back to the routine you created, choose which activities and at what time of day and week they should be done.**
5. **Activate the routine you currently want to focus on** by selecting the "activate this routine" button. This will allow you to see your routine on the time grid after saving. Of course, only one of the routines can be active.
6. Congratulations, you just planned a great quality time ! Now, **pressing** on the time grid or in the "Time Statisctics" section, **the activity you want to do, gives you access to a simple time countdown** so you can keep track of your own engagement. 

<!-- <p align="center"><code><img alt="MEVN logo" height="110" title="MEVN logo" src="../organiser/client/src/assets/mevnLogo.png"></code></p> -->

## Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
- [Tests](#tests)
  - [E2E](#e2e-tests)
  - [Unit Tests](#unit-tests)
<hr>
<br>

## Demo

<p align="center">Try <a href="https://organizer-demo.herokuapp.com/"><b>Organizer</b></a> by yourself:</p>
<p align="center"><code><a href="https://organizer-demo.herokuapp.com/"><img height="400" src="client/src/assets/Organizer.gif" alt="usage example"></a></code></p>
<hr>
<br>

## Technologies

| Technology | Description | Link |
|-|-|-|
| Vue.js| Versatile Progressive Javascript Framework for building user interfaces| https://vuejs.org/ |
| Node.js | Asynchronous JavaScript runtime designed to build scalable network applications | https://nodejs.org/ |
| Express | Unopinionated, minimal and flexible Node.js framework | https://expressjs.com |
| MongoDB | NoSQL document database that works well with Node.js | https://www.mongodb.com/ |
| Vuex | Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application | https://vuex.vuejs.org/ |
| Vuetify | Vue UI Library helps to generate responsive and polished applications | https://vuetifyjs.com/ |
| Bootstrap | Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites.  | https://getbootstrap.com/ |
| Axios | Promise based HTTP client for the browser and node.js| https://github.com/axios/axios |
| Passport | Authentication middleware for Node.js | https://www.passportjs.org |
| JWT | A package that generates tokens for secure authentication | https://github.com/auth0/node-jsonwebtoken/ |
| bcrypt.js | A library to help hash passwords stored in databases | https://github.com/dcodeIO/bcrypt.js/ |
| Mongoose | MongoDB object modeling tool for Node.js | https://mongoosejs.com/ |
| Moment.js| A library that parses, validates, manipulates, and displays dates and times | https://momentjs.com/ |
| Jest | A comprehensive JavaScript testing solution | https://jestjs.io/ |
| Cypress | E2E Testing Framework that runs in a browser | https://www.cypress.io/ |
<hr>
<br>

## Features

- Register and authenticate users, secure passwords

- Create custom Routines, Activities and Goals

- Add descriptions, priorities and deadlines

- Select the exact activity time for a specific routine

- Keep an overview of your own routine on a lucid time grid

- Track how much time you actually spend on a given activity using the built-in stopwatch
<hr>
<br>

## Installation

### Prerequisites

>To run the application install Node.js, MongoDB and Vue CLI. To do so follow instructions on official websites.

- [NodeJS](https://nodejs.org/) - version 14 and higher
- [MongoDB](https://www.mongodb.com/)
- [Vue-CLI](https://cli.vuejs.org/)

### Running Locally

1. Clone the repository

```console
https://github.com/ArturFracek/organiser.git
cd organiser
```

2. Install dependencies

Run npm ci to install required node modules.

- Install dependencies for the project root folder

```console
npm ci
```

3. Run the application

>Be sure to run a [script](#available-scripts) in the project root folder.

```console
npm run dev
```

Visit application on: [localhost:8080](http://localhost:8080/).
<hr>
<br>

## Tests

The application contains E2E and unit tests, using Cypress and Jest.js
>Be sure to run scripts in the right directory

Run tests on testing server with separate database:

```console
npm run test
```
### E2E Tests

E2E tests are written in [Cypress](https://www.cypress.io/). Those tests simulate the real user scenario and interact with dummy data. To run E2E tests, after running [test server](#tests), open the terminal and run the code below:

```console
npm run cy
```

### Unit Tests

Vue components, Vuex store, API unit tests written in [Jest](https://jestjs.io/). To run server tests open the terminal and run the code below:

```console
npm run jest
```
