# Organizer

[![Organizer](https://img.shields.io/endpoint?url=https://dashboard.cypress.io/badge/simple/g42uwf&style=flat&logo=cypress)](https://dashboard.cypress.io/projects/g42uwf/runs)
[![Codacy Badge](https://app.codacy.com/project/badge/Grade/b579256de9794b9dadf521dded359088)](https://www.codacy.com/gh/Karol-Witkowski/Gemverse/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=Karol-Witkowski/Gemverse&amp;utm_campaign=Badge_Grade)

<p align="center"><code><img alt="Organizer logo" height="90" title="Organizer Logo" src="../organiser/client/src/assets/LOGO.png"></code></p>

<b>Organizer</b> is an app that allows to make a personal, well suited weekly and daily routines based on user's activities. The app's aim is to help user plan future in higly time controling order. The following task can be obtained by using Organizer features:
1-Set a personal goal, describe it, give it a priority number, and supossed (editable) deadline.
2-

<p align="center"><code><img alt="MEVN logo" height="90" title="MEVN logo" src="client\src\assets\img\mevnLogo.png"></code></p>

## Contents

- [Demo](#demo)
- [Technologies](#technologies)
- [Features](#features)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Running Locally](#running-locally)
- [Configuration](#configuration)
  - [JWT](#json-web-token)
  - [MongoDB](#mongodb)
  - [Environment variables](#environment-variables)
- [Tests](#tests)
  - [Client](#client-tests)
  - [Server](#server-tests)
  - [E2E](#e2e-tests)
- [Available scripts](#available-scripts)
  - [Root](#root-folder-scripts)
  - [Client](#client-scripts)
  - [Server](#server-scripts)
<hr>
<br>

## Demo

<p align="center">Try <a href="https://gemverse.herokuapp.com/"><b>Gemverse</b></a> by yourself:</p>
<p align="center"><code><a href="https://gemverse.herokuapp.com/"><img height="400" src="client\src\assets\img\usageexample.gif" alt="usage example"></a></code></p>
<hr>
<br>

## Technologies

| Technology | Description | Link |
|-|-|-|
| Sass | Preprocessor that helps write maintainable CSS | https://sass-lang.com/ |
| Vuetify | Vue UI Library helps to generate responsive and polished applications | https://vuetifyjs.com/ |
| Vue.js | Versatile Progressive Javascript Framework for building user interfaces | https://vuejs.org/ |
| Node.js | Asynchronous JavaScript runtime designed to build scalable network applications | https://nodejs.org/ |
| Express | Unopinionated, minimal and flexible Node.js framework | https://expressjs.com |
| Socket.IO | Web sockets implementation enables real-time event-based communication | https://socket.io/ |
| Passport | Authentication middleware for Node.js | https://www.passportjs.org |
| JWT | A package that generates tokens for secure authentication | https://github.com/auth0/node-jsonwebtoken/ |
| bcrypt.js | A library to help hash passwords stored in databases | https://github.com/dcodeIO/bcrypt.js/ |
| MongoDB | NoSQL document database that works well with Node.js | https://www.mongodb.com/ |
| Mongoose | MongoDB object modeling tool for Node.js | https://mongoosejs.com/ |
| Day.js | A library that parses, validates, manipulates, and displays dates and times | https://day.js.org/ |
| Jest | A comprehensive JavaScript testing solution | https://jestjs.io/ |
| Cypress | E2E Testing Framework that runs in a browser | https://www.cypress.io/ |
<hr>
<br>

## Features

- Register and authenticate users, secure passwords

- Enable room based communication

- Create public/secured room or join already made channels

- Display new users and rooms in real-time

- Generate unique SVG based avatars

- Allow users to delete their own accounts and generate anonymous alias
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
git clone git@github.com:Karol-Witkowski/Gemverse.git
cd Gemverse
```

2. Install dependencies

Run npm install for root, client and server directories to install required node modules.

- Install dependencies for the project root folder

```console
npm install
```

- Install dependencies for the client directory

```console
cd client
npm install
```

- Install dependencies for the server directory

```console
cd server
npm install
```

3. Create a .env file in the server directory according to the configuration

Go to [configuration section](#configuration) or check a .env.example file inside the repository.

4. Set properly environment variables and database

_Note: To run code locally variables must be set following the code below:_

```bash
NODE_ENV='development'
HEROKU_DEPLOYMENT=false
```

5. Run the application

>Be sure to run a [script](#available-scripts) in the project root folder.

```console
npm run dev
```

Visit application on: [localhost:8080](http://localhost:8080/).
<hr>
<br>

## Configuration

To run the application basic configuration is required. This step includes generating JWT, setting the database and adding environment variables.

### JSON Web Token

The application use JWT-based authentication. To take advantage of this solution generate JWT secret and store it in a .env file.

### MongoDB

The application uses the MongoDB database. Generate MongoDB URL and store it in a .env file. To do so follow [MongoDB guide](https://docs.mongodb.com/guides/server/install/).

### Environment variables

To start using the application create a .env file in the server directory and setup variables following the guide below.

_Note: Never expose those variables. The wrong configuration will result in an error_

```bash
DATABASE_URL=DATABASE_URL
TESTDB_URL=TESTDB_URL
SALT_WORK_FACTOR=SALT_WORK_FACTOR

# JWT secret
JWT_KEY=JWT_KEY

# JWT expire time
JWT_EXPIRE=JWT_EXPIRE

NODE_ENV='development'
HEROKU_DEPLOYMENT=false
PORT=PORT
```
<hr>
<br>

## Tests

The application contains both client and server tests. Thanks to the [cross-env](https://github.com/kentcdodds/cross-env#readme/) module user can skip seeding manually data for all tests or setting NODE_ENV to 'test' for all tests except E2E.

>Be sure to run [scripts](#available-scripts) in the right directory

### Client tests

Client directory unit tests written using [Vue Test Utils](https://vue-test-utils.vuejs.org/) with [Jest](https://jestjs.io/). To run client tests open the terminal and run the code below:

```console
cd client
npm run test:unit
```

### Server tests

Mostly API routes unit tests written in [Jest](https://jestjs.io/). All of them use seeded data. To run server tests open the terminal and run the code below:

```console
cd server
npm run test:watch
```

### E2E tests

E2E tests are written in [Cypress](https://www.cypress.io/). Those tests simulate the real user scenario and interact with dummy data. To run E2E tests open the terminal and run the code below:

_Note: Set NODE_ENV to 'test' to run those tests_
<br>

Open Cypress Test Runner:
```console
cd client
npm run test:e2e-open
```

Run all tests headlessly in the Electron browser:
```console
cd client
npm run test:e2e-run
```
<hr>
<br>

## Available scripts

Scripts are divided into three parts: root folder, client and server scripts.

### Root folder scripts

Run application in the development mode:

```console
npm run dev
```

### Client scripts

Run client development server with Hot-Module-Replacement:

```console
npm run serve
```

Lint and fix client files:

```console
npm run lint
```

Run client tests with Jest:

```console
npm run test:unit
```

Launch Cypress in interactive mode with a GUI:

```console
npm run test:e2e-open
```

Run client E2E tests in headless mode with Cypress:

```console
npm run test:e2e-run
```

Insert initial data into a database:

```console
npm run db:seed
```

Initialize Vue UI and project manager:

```console
npm run ui
```

Produce a client production-ready bundle in the dist/ directory:

```console
npm run build
```

### Server scripts

Start and reload the application automatically:

```console
npm run dev:watch
```

Run and reload server tests with Jest Start automatically:

```console
npm run test:watch
```

Insert initial data into a database:

```console
npm run db:seed
```
