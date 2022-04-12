describe("Interact with dropdown lists", () => {
    it("Select specific values via select dropdown lists", ()=>{
      cy.visit('https://webdriveruniversity.com')
      cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
      cy.get('#dropdowm-menu-1').select('c#').should('have.value', 'c#')

      cy.get('#dropdowm-menu-2').select('maven')
      .should('have.value', 'maven')

      cy.get('#dropdowm-menu-2').select('JUnit')
      .should('contain', 'JUnit')
    })

  })
  