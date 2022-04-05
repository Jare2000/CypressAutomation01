/// <reference types= "cypress"/>


describe("Checkbox Suite", function(){

    it("Verifying and Automating checkbox Test Case", function(){

        
        cy.wait(9000)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // cy.get(".mouse-hover-content").invoke("show")
        cy.contains("Top").click({force: true})
        cy.url().should("include", "top")

     
    })

})
