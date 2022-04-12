class GoToHairCare_PO {

    visitPage(){
        cy.visit('https://automationteststore.com/')
    }

    clickHairCare(){
        cy.visit('https://automationteststore.com/')
        cy.get(`a[href*='product/category&path=']`).contains("Hair Care").click()
    }


}

export default GoToHairCare_PO;