describe("Verify checkboxes", () => {

beforeEach(() => {
  cy.visit('https://webdriveruniversity.com')
  cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
})

    it("Check and validate checkbox", ()=>{
      cy.get('#checkboxes input').eq(0).as('option1')
      cy.get('@option1').check().should('be.checked')

    })

    it("Uncheck and validate checkbox", ()=>{
       cy.get('#checkboxes input').eq(2).as('option3')
        cy.get('@option3').uncheck().should('not.be.checked')
  
      })

      it("Check multiple checkboxes", ()=>{

        cy.get("input[type='checkbox']").check(["option-1", "option-2", "option-3", "option-4"]).should('be.checked')
        cy.get("input[type='checkbox']").eq(3).should('be.checked')
      })

  })
  