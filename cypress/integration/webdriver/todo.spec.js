import homePage_PO from '../../support/pageObjects/webdriver/webdriver/Homepage_PO'
import contact_Us from '../../support/pageObjects/webdriver/webdriver/Contact_PO'

/// <reference types="cypress" />

describe("first test in course", () => {
  const contact_us = new contact_Us()
  const homepage_PO = new homePage_PO()

before(function() {
  cy.fixture('example').then(function(data) {
    globalThis.data = data;
  })
})

beforeEach(()=>{
  // const homepage_PO = new homePage_PO()
  homepage_PO.visitHomepage();
  homepage_PO.clickOn_ContactUs_Button();
  cy.pause()
})


  it("does someting", ()=>{
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('eq', 'WebDriver | Contact Us')
    cy.url().should('include', 'contactus')
    // const contact_us = new contact_Us()
    contact_us.contactForm_Submission(data.first_name, data.last_name, data.email, 'dupa', 'h1', 'Thank You for your Message!')
  })

  it("does someting else", ()=>{
    // const contact_us = new contact_Us()
    contact_us.contactForm_Submission(data.first_name, data.last_name, ' ', 'dupa', 'body', 'Error')
  })
})
