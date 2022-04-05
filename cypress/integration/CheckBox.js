/// <reference types= "cypress"/>

describe("Checkbox Suite", function(){

    it("Verifying and Automating checkbox Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.pause()
        cy.wait(5000)
        
        // Using aliasing 
        cy.get('input[type="checkbox"]').as("checkbox")
        
        cy.get("@checkbox").check("option1").should("be.checked").and("have.value", "option1")
        cy.get("@checkbox").uncheck("option1").should("not.be.checked")
        cy.get("@checkbox").check(["option2", "option3"]).should("be.checked")


        /*
                    QUESTION
        How to you assert .should("have.value") for an array???
        E.G cy.get('input[type="checkbox"]').check(["option2", "option3"]).should("be.checked").should("have.value", ["option1", "option2"]) => Flags error
        */

        // Automating radio buttons
        cy.get(".radioButton").check("radio1").click().should("be.checked")

        // Using css selector
        // cy.get('input[type="radio"]').check("radio2").should("be.checked")

        

    })


})
