describe("Test mouse actions", () => {
    it("Scroll element into view", ()=>{
      cy.visit('https://webdriveruniversity.com')
      cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()

  })

  it("Drag and drop", ()=>{
    cy.visit('https://webdriveruniversity.com')
    cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
    cy.get('#draggable').trigger('mousedown', {which: 1, force: true})
    cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})

})

it("Perform double click", ()=>{
    cy.visit('https://webdriveruniversity.com')
    cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
    cy.get('#double-click').dblclick()
    cy.get('#double-click').should('have.class', 'double')
})

it.only("Hold down the left mouse click on button", ()=>{
    cy.visit('https://webdriveruniversity.com')
    cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
    cy.get('#click-box').trigger('mousedown').
    then(($element) => {
        expect($element).to.have.css('background-color', 'rgb(0, 255, 0)')
    })
})
})