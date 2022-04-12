describe("Test datepicker", () => {

    it("Select date", ()=>{
        cy.visit('https://webdriveruniversity.com')
        cy.get('#datepicker').invoke('removeAttr', 'target').click()
        cy.get('#datepicker').click()
        let date = new Date()
        date.setDate(date.getDate())

        let year = date.getFullYear() +1
        let month = date.getMonth()
        const monthNameLong = date.toLocaleString("en-US", { month: "long" });
        let day = date.getDate()

        // cy.log(year)
        // cy.log(month)
        // cy.log(day)

        function selectMonthAndYear() {
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first()
            .then(currentDate => {
                if(!currentDate.text().includes(year)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            }).then(() => {
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first()
                .then(currentDate => {
                if(!currentDate.text().includes(monthNameLong)){
                    cy.get('.next').first().click()
                    selectMonthAndYear()
                }
            })
            })
        }

        selectMonthAndYear()
        cy.get('td.day').contains(day).click()

  })


})