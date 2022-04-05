/// <reference types= "cypress"/>

describe("Checkbox Suite", function(){

    it("Verifying and Automating checkbox Test Case", function(){

        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get("#name").type("Adejare")
        // .type("Adejare")
        cy.get("#alertbtn").click()
        cy.get("#name")
        // .type("Oladipupo")
        cy.get('input[value="Confirm"]').click()

        // cy.get("#alertbtn").trigger("click")
        // cy.get('input[value="Confirm"]').trigger("click")

        cy.on("window:alert", (str)=>
        {

            // Mocha
            expect(str).to.equal( "Hello " + "Adejare" + ", share this practice page and share your knowledge")
        })

        cy.on("window:confirm", (str)=>
        {

            // Mocha
            expect(str).to.equal("Hello , Are you sure you want to confirm?")
        })

        cy.log("GAME CHANGER")
  
    })

})
