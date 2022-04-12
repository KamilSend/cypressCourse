describe("Iteration", () => {
    it("Iterate through elements and log it", () => {

        cy.visit('https://automationteststore.com/')
        cy.get(`a[href*='product/category&path=']`).contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log(`Index: ${index}, element: ${$el.text()}`)
          })



    })

    it.only("Add specific product to busket", () => {

        cy.visit('https://automationteststore.com/')
        cy.get(`a[href*='product/category&path=']`).contains("Hair Care").click()

        cy.selectProduct('Curls to straight Shampoo')

        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
        //     if($el.text().includes('Curls to straight Shampoo')){
        //         cy.wrap($el).click()
        //     }
        //   })

    })


})