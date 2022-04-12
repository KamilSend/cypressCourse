class Contact_PO {
    visitHomepage(){
        cy.visit("/")
    }

    clickOn_ContactUs_Button() {
        cy.get('#contact-us').invoke('removeAttr','target').click()
    }

    dupa(){
        cy.log('dupa')
    }

    contactForm_Submission(firstName, lastName, email, comment, element, text) {
        cy.get('[name="first_name"]').type(firstName)
        cy.get('[name="last_name"]').type(lastName)
        cy.get('[name="email"]').type(email)
        cy.get('textarea.feedback-input').type(comment)
        cy.get('[type="submit"]').click()
        cy.get(element).contains(text)
    }

}

export default Contact_PO;