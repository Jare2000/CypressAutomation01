/// <reference types= "cypress"/>
/// <reference types= "cypress-iframe"/>
import "cypress-iframe"


describe("Framework test", function(){

    before(function(){

        cy.fixture("example2").then(function(data){

            this.data = data
        })
            
    })

    it("demo example", function(){

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