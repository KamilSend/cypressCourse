// import { data } from "cypress/types/jquery";
import goToHairCare_PO from '../../support/pageObjects/automationStore/goToHairCare_PO'
import addProducts_PO from '../../support/pageObjects/automationStore/addProducts_PO'

describe("Add multiple products to basket", () => {

    const gotohaircare_PO = new goToHairCare_PO()
    const addproducts_PO = new addProducts_PO()

    before(function() {
        cy.fixture('products.json').then(function(data) {
          globalThis.data = data;
        })
      })

    beforeEach(() => {

        gotohaircare_PO.visitPage();

        gotohaircare_PO.clickHairCare();


        // cy.visit('https://automationteststore.com/')
        // cy.get(`a[href*='product/category&path=']`).contains("Hair Care").click()
    })


    it("Add specific product", () => {

        // cy.addProductToBasket(data.productName[0])
        // addproducts_PO.dupa()
        addproducts_PO.addProduct()


        // data.productName.forEach(element => {
        //     cy.addProductToBasket(element)
        // });
        // cy.get('.dropdown-toggle > .label').should('contain', 3)
        // cy.get('.dropdown-toggle i').click()

    })

})