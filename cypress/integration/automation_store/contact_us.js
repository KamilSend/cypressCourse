/// <reference types="cypress" />

describe("Test contant test score", () => {

  before(function() {
    cy.fixture('example').as("user")
  })

    it("submit contact form", ()=>{
      cy.visit('https://automationteststore.com/')
      cy.xpath("//a[text()='Contact Us']").click()
        .then((item) => {
          cy.log(item.text())
        })

      cy.get('@user').then((user)=>{
        cy.xpath("//input[@id='ContactUsFrm_first_name']")
        .type(user.first_name)
        cy.get('#ContactUsFrm_email').type(user.email)
      })


      cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
      cy.xpath("//textarea[@id='ContactUsFrm_enquiry']").type('test message')
      cy.get("button[title='Submit']").click()
      cy.get('section.mb40>p').eq(1).should('have.text','Your enquiry has been successfully sent to the store owner!')

    //   cy.get('#ContactUsFrm_first_name').type('joe')
    //   cy.get('#ContactUsFrm_enquiry').type('some message')
    //   cy.get("button[title='Submit']").click()
    })
  })
  