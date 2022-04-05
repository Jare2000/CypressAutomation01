/// <reference types= "cypress"/>

describe("Checkbox Suite", function(){

    it("Verifying and Automating checkbox Test Case", function(){

        
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

})
