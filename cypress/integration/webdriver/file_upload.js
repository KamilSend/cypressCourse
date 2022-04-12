describe("Test file upload", () => {

    it("Upload a file", ()=>{
        cy.visit('https://webdriveruniversity.com')
        cy.get('#file-upload').invoke('removeAttr', 'target').click()


        //poprawne rozwiązanie z kursu
        cy.fixture("laptop.png", "base64").then( fileContent => {
            cy.get('#myFile').attachFile({
                fileContent,
                fileName: "laptop.png",
                mimeType: "image/png"
            },
            {
                uploadType: "input"
            })
        })

        //to moje rozwiazanie na podstawie dokumentacji, też zadziałało
        // cy.get('#myFile')
        // .attachFile('laptop.png');


        cy.get("#submit-button").click()
  })

  it("Upload no file", ()=>{
    cy.visit('https://webdriveruniversity.com')
    cy.get('#file-upload').invoke('removeAttr', 'target').click()
    cy.get("#submit-button").click()
})

})