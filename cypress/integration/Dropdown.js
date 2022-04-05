/// <reference types= "cypress"/>

describe("Checkbox Suite", function(){

    it("Verifying and Automating checkbox Test Case", function(){

        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        // cy.pause()

        /* Using ID css selector
        cy.get("#dropdown-class-example").select("option3").should("have.value", "option3")
        */

        // Using tag name (static dropdown)
        cy.get("select").select("option3").should("have.value", "option3")

        // Test (Flags an error)
        // cy.get("select").select("option3").should("be.selected") 

        // Dynamic Dropdown
        cy.get("#autocomplete").type("Ind")
        cy.get("li.ui-menu-item").each(($el, list, $index)=> {

            if ($el.text() === "Indonesia")
            {

                // $el.click() "Deprecated but works in some instances"
                $el.trigger("click")
            }
        }) 

        // Assertion
        cy.get("#autocomplete").should("have.value", "Indonesia")

        // Automating visible and non visible
        cy.get("#displayed-text").should("be.visible")
        cy.get("#hide-textbox").click()
        cy.get("#displayed-text").should("not.be.visible")
        cy.get("#show-textbox").click()
        cy.get("#displayed-text").should("be.visible")
        
    })


})
