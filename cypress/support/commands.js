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
import 'cypress-file-upload';

Cypress.Commands.add("login", () => {

    cy.get('input[name="form[USR_USERNAME]"]').type(Cypress.env('credentials').username),
        cy.get('input[name="form[USR_PASSWORD_MASK]"]').should('be.visible').type(Cypress.env('credentials').password),
        cy.get('select[name ="form[USER_ENV]"]').should('be.visible').select('account_service')
    cy.get('input[name="form[BSUBMIT]"]').click({ force: true })

    // cy.get('#username').type(Cypress.env('credentials').username);
    // cy.get('#password').type(Cypress.env('credentials').password);
    // cy.get('.btn').click();
})

Cypress.Commands.add('visitUrl', (url) => {
    cy.visit('http://10.45.8.34/sys/en/neoclassic/login/login', {
        failOnStatusCode: false,
        //   auth: {
        //     username: Cypress.env('htaccess') ? Cypress.env('htaccess').username : '',
        //     password: Cypress.env('htaccess') ? Cypress.env('htaccess').password : ''

        //   }
    });
});

// Cypress.Commands.add('iframe', { prevSubject: 'element' }, $iframe => {
//     return new Cypress.Promise(resolve => {
//         $iframe.on('load', () => {
//             resolve($iframe.contents().find('body'));
//         });
//     });
// });

Cypress.Commands.add('getIframeBody', (iframe) => {
    // get the iframe > document > body
    // and retry until the body element is not empty
    return cy
        .get(iframe)
        .its('0.contentDocument.body')//.should('not.be.empty')
        .should('be.visible')
        // wraps "body" DOM element to allow
        // chaining more Cypress commands, like ".find(...)"
        // https://on.cypress.io/wrap
        .then(cy.wrap)
})

Cypress.Commands.add('forceClick', { prevSubject: 'element' }, (subject, options) => {
    cy.wrap(subject).click({ force: true })
});

Cypress.Commands.add('forceType', { prevSubject: 'element' }, (subject, text, options) => {
    cy.wrap(subject).type(text, { force: true })
});

