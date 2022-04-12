describe("click menu item", () => {
    it("click one item from menu using variable", () => {


        const skincare = 'Skincare'

        cy.visit('https://automationteststore.com/')
        const makeup = cy.get(`a[href*='product/category&path=']`).contains('Makeup')
        cy.get(`a[href*='product/category&path=']`).contains(skincare)
        .then((item) => {
            cy.log(item.text())
        })
        .click()
        cy.get('.maintext').should('have.text', skincare)

    })

    it.only("validating contact us page", () => {


        const skincare = 'Skincare'

        cy.visit('https://automationteststore.com/index.php?rt=content/contact')
        // cy.contains('#ContactUsFrm', 'Contact Us Form')
        // .find('#field_11').should('contain', 'First name:')

        cy.contains('#ContactUsFrm', 'Contact Us Form').then( item => {
            const text = item.find('#field_11').text()
            expect(text).to.contain('First name:')
        })
    

    })

})