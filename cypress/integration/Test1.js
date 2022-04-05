/// <reference types= "cypress"/>
describe("Test Suite", function(){

    it("Test Case", function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type("ca")
        // cy.wait(2000)
        cy.get(".product").should("have.length", 5)


        // Aliasing 
        cy.get(".products").as("productLocator")
        cy.get('.product:visible').should("have.length", 4)

        // Parent child chaining 
        cy.get("@productLocator").find(".product").should("have.length", 4)

        cy.get("@productLocator").find(".product").eq(2).contains("ADD TO CART").click().then(function(){

            console.log("HelloWorld")
        })

        // cy.get(':nth-child(2) > .product-action > button').click()
        // cy.wait(2000)
        // cy.get('.cart-icon > img').click()

        cy.get(".brand").should("have.text", "GREENKART")
        

        // to print out log
        cy.get(".products").find(".product").each(($el, index, $list) => {

            const textVeg=$el.find("h4.product-name").text()
            if (textVeg.includes("Cashews"))
            {

                $el.find("button").trigger("click")
            }

        })

        cy.get(".brand").then(function(logoelement) {

            cy.log(logoelement.text())
        })



    })
})