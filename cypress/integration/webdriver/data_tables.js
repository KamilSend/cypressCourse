describe("Handling data", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
      })
    it("Calculate and assert the total age of all users", ()=>{

        const userDetails = []
        let numb = 0;

      cy.get('#thumbnail-1 td').each(($el, index, list) => {
        userDetails[index] = $el.text()
      }).then(()=>{
          let i
          for(i = 0; i < userDetails.length; i++){
              if(Number(userDetails[i])){
                numb += Number(userDetails[i])
              }
          }
          cy.log(numb)
          expect(numb).to.eq(322)
      })




  })

  it.only("Calculate and assert the age of given user", ()=>{

    cy.get('#thumbnail-1 tr td:nth-child(2)').each(($el, index, list) => {
        if($el.text() === 'Doe'){
            cy.get('#thumbnail-1 tr td:nth-child(2)').next().eq(index).then(($el) => {
                cy.log($el.text())
            })
        }
    })
})

})