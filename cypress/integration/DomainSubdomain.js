/// <reference types= "cypress"/>


describe("Checkbox Suite", function(){

    it("Verifying and Automating checkbox Test Case", function(){

        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        // Would work for subdomains but not for new or superdomains
        cy.get("#opentab").then(function(e1){

            const url = e1.prop("href")
            cy.log(url)
            cy.visit(url)
        })

        

     
    })

})
