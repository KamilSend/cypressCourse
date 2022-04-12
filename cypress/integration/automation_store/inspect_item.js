describe("select single item", () => {
    it("select and inspect single item", () => {
        cy.visit('https://automationteststore.com/')
        cy.get('.fixed_wrapper').find('.prdocutname').eq(0).click()
            .then((item) => {
                console.log(item)
            })
    })
})