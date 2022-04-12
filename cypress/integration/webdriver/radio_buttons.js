describe("Verify radiobuttons", () => {

  before(() => {
    cy.visit('https://webdriveruniversity.com')
    cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
  })

    it("Check specific radio buttons", ()=>{
      // cy.visit('https://webdriveruniversity.com')
      // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
      cy.get('#radio-buttons').find("[type='radio']").first().check()
    })


    it("Validate the states of specific radio buttons", ()=>{
        // cy.visit('https://webdriveruniversity.com')
        // cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
        cy.get("[value='lettuce']").should('not.be.checked')
        cy.get("[value='cabbage']").should('be.disabled')
        cy.get("[value='pumpkin']").should('be.checked')

        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should('be.checked')
      })
  })
  