/// <reference types= "cypress"/>

// This function is to describe your Test Suite
describe("Instaagram login", function() {

    // This function is to write test cases.
    it('Login test to instagram', function() {

        // This line of script is used to visit a web application url
        cy.visit("https://www.instagram.com/");

        // Spy on username field
        cy.get(":nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ")
            // Type your instagram username
            .type("qualestest");

        // Spy on password field
        cy.get(":nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ")
            // Type password
            .type("qualestest123");

        // Spy login button
        cy.get(".sqdOP > .qF0y9")
            // Click the login button
            .click();

        // Spy searhc box
        cy.get(".eyXLr")
            // Assert that the search box is visible
            .should("be.visible");


    });

});