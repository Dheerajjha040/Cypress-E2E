/// <reference types="cypress" />
// custom-types.d.ts
declare module 'cypress-mochawesome-reporter/plugin';

declare namespace Cypress {
    interface Chainable {
      /**
       * Custom command to login
       * @param email User's email
       * @param password User's password
       */
      login(email: string, password: string): Chainable<void>;
    }

    
  }