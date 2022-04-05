/// <reference types= "cypress"/>
/// <reference types= "cypress-iframe"/>
import "cypress-iframe"


describe("Framework test", function(){

    before(function(){

        cy.fixture("example2").then(function(data){

            this.data = data
        })
            
    })

    // Test case
    it("Alert(Used click and type actions)", function(){

        
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

    // Test case
    it("Table automation(used promise)", function(){

        
        cy.wait(9000)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.wait(8000)

       cy.get("tr td:nth-child(2)").each(($e1, index, $list) =>
       {
            const textVar = $e1.text()
            if(textVar.includes("Python"))
            {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price)
                {
                    const priceVar = price.text()
                    expect(priceVar).to.equal("25")
                })

            }

       }) 

    })

    // Test case
    it("Verifying and Automating dropdowns (static and dynamic) Test Case", function(){

        
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        

        // Using tag name (static dropdown)
        cy.get("select").select("option3").should("have.value", "option3")

        

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

    // Test case
    it("Testing iFrames", function(){

        cy.wait(8000)
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe")

        cy.iframe().find("a[href*='mentorship']").eq(0).click()
        cy.iframe().find("h1[class*='pricing-title']").should("have.length", 2)


    })

    it("Customized cypress command", function(){

        cy.wait(7000)
        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        cy.get("input[name='name']:nth-child(2)").type(this.data.name)
        cy.get("select").select(this.data.gender)
        cy.get(':nth-child(4) > .ng-untouched').should("have.value", this.data.name)
        cy.get(':nth-child(1) > .form-control').should("have.attr", "minlength", "2")
        cy.get('#inlineRadio3').should("be.disabled")

        cy.get(':nth-child(2) > .nav-link').click()

        this.data.productName.forEach(function(element){

        cy.selectProduct(element)

        })
   

    })

})
