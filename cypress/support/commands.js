// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

console.log(__dirname)
const dbConfigFile = require('../../config/keys')


Cypress.Commands.add('setup', () => {
    const NODE_ENV = Cypress.env('NODE_ENV')
    const dbConfig = dbConfigFile[NODE_ENV || "dev"] 
    cy.exec(`mongo ${dbConfig.mongoURI} --eval "db.dropDatabase()"`)
    cy.wait(1000)
})