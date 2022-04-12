describe("Verify autocomplete dropdown lists", () => {
    it("Select specific product via autocomplete list", ()=>{
      cy.visit('https://webdriveruniversity.com')
      cy.get('#autocomplete-textfield').invoke('removeAttr','target').click()
      cy.get('#myInput').type('A')

      cy.get('#myInputautocomplete-list > *').as('productList')
      
      cy.get('@productList').each(($el, index, $list) => {
          const prod = $el.text();
          const productToSelect = 'Almond';
            
          if(prod === productToSelect) {
              cy.log(prod)
              $el.trigger("click");
              cy.get('#submit-button').click();
              cy.url().should('include', productToSelect)

          }


      }).then(() => {
        cy.get('#myInput').type('G')
        cy.get('@productList').each(($el, index, $list) => {
            const prod = $el.text();
            const productToSelect = 'Grapes';
              
            if(prod === productToSelect) {
                cy.log(prod)
                $el.trigger("click");
                cy.get('#submit-button').click();
                cy.url().should('include', productToSelect)
  
            }
  
        })
      })

      

  })
})