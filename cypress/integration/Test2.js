/// <reference types= "cypress"/>
describe("Test Suite", function(){

    it("Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.wait(5000)
        cy.get('.search-keyword').type("ca")
        // cy.wait(2000)

        // Aliasing 
        cy.get(".products").as("productLocator") 

        cy.wait(5000)
        cy.get("@productLocator").find(".product").each(($el, index, $list) => {

            const textVeg=$el.find("h4.product-name").text()
            if (textVeg.includes("Cashews"))
            {

                $el.find("button").trigger("click")
            }

        })

        cy.get('.cart-icon > img').click()
        cy.contains("PROCEED TO CHECKOUT").click()
        cy.get(':nth-child(14)').click()

        

    })


})
