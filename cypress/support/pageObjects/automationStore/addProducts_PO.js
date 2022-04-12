class GoToHairCare_PO {

// dupa(){
//     cy.log('dupa')
// }

    addProduct(){
        data.productName.forEach(element => {
            cy.addProductToBasket(element).then(()=>{
                // debugger
            })
        });
        cy.get('.dropdown-toggle > .label').should('contain', 3)
        cy.get('.dropdown-toggle i').click().debug()
    }

}

export default GoToHairCare_PO;