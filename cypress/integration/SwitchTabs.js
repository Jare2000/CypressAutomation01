/// <reference types= "cypress"/>

describe("Checkbox Suite", function(){

    it("Verifying and Automating checkbox Test Case", function(){

        
        cy.wait(7000)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(7000)

        // Switching to a different tab in Cypress
        cy.get("#opentab").invoke("removeAttr", "target").click()

        cy.url().should("include", "rahulshettyacademy")
        
        // Navigating browser controls
       cy.go("back")
  
    })

})
