
/// <reference path="./commands.d.ts" />

Cypress.Commands.add('login', (email, password) => { 

    cy.visit('')
    cy.get('input[placeholder$="Username"]').type(email)
    cy.get('input[placeholder$="Password"]').type(password)
    cy.get('button').click()



 })
