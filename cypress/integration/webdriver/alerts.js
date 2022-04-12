
describe("Handle alerts", () => {
    it("Confirm alert correct test", ()=>{
      cy.visit('https://webdriveruniversity.com')
      cy.get('#popup-alerts').invoke('removeAttr','target').click()

      cy.get('#button1').click()

      cy.on('window:alert', (str) => {
          expect(str).to.equal('I am an alert box!')
      })
    })

    it("Validate confirm alert box", ()=>{
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
  
        cy.get('#button4').click()
  
        cy.on('window:alert', (str) => {
            return true
        })

        cy.get('#confirm-alert-text').contains('You pressed OK!')
      })


      it("Validate cancel alert box", ()=>{
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
  
        cy.get('#button4').click()
  
        cy.on('window:confirm', (str) => {
            return false
        })

        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
      })

      it.only("Validate alert using a stub", ()=>{
        cy.visit('https://webdriveruniversity.com')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
  
        const stub = cy.stub()
        cy.on('window:confirm', stub)

        cy.get('#button4').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
        }).then(() => {
            return true;
        }).then(() => {
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })

  
      })

  })
  