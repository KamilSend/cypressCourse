
describe("validate webdriveruni homapage links", () => {
    it.only("Confirm links redirect to the correct page", ()=>{
      // cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
      cy.visit('https://webdriveruniversity.com')
      cy.get('#to-do-list').invoke('removeAttr', 'target').click()
      cy.url().should('include', 'To-Do-List')
      cy.go('back')
      cy.url().should('eq', 'https://webdriveruniversity.com/')
    })
  
  })
  