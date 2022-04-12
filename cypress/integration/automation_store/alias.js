describe("Alias & Invoke", () => {
    it("Validate specific hair care product", () => {

        cy.visit('https://automationteststore.com/')
        cy.get(`a[href*='product/category&path=']`).contains("Hair Care").click()

        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')

    })

it("Validate specific hair care product", () => {

        cy.visit('https://automationteststore.com/')

        cy.get('.thumbnail').as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
        // cy.get('.thumbnail .pricetag a').eq(0).invoke('title').as('cart_title')

    })

    it.only("calculate total products", () => {

        cy.visit('https://automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        //   })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('newPrice')


        var totalPrice = 0
        cy.get('@itemPrice').then($linktext => {
            let sum = 0; 

            const itemPrice = $linktext.split('$')
            let i
            for(i=0; i<itemPrice.length; i++){
                sum += Number(itemPrice[i])
            }
            totalPrice = sum
            cy.log('Suma'+sum)
            cy.log(totalPrice)
        })

        cy.get('@newPrice').then($linktext => {
            let sum2 = 0; 
            cy.log('totalprice' + totalPrice)

            const itemPrice = $linktext.split('$')
            let i
            for(i=0; i<itemPrice.length; i++){
                sum2 += Number(itemPrice[i])
            }
            totalPrice += sum2
            cy.log(sum2)

        }).then(() => {
            cy.log(totalPrice)
        })



        
    })


    it("Calculate total of normal and sale products", () => {
        cy.visit("https://automationteststore.com/");
        cy.get('.thumbnail').as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text());
        // });
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemsPriceTotal = 0;
            var itemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < itemPrice.length; i++) {
                cy.log(itemPrice[i])
                itemsPriceTotal += Number(itemPrice[i])
            }
            itemsTotal += itemsPriceTotal;
            cy.log("Non sale price items total: " + itemsPriceTotal)
        })

    
        cy.get('@saleItemPrice').then($linkText => {
            var saleItemsPrice = 0;
            cy.log('items total'+itemsTotal)

            var saleItemPrice = $linkText.split('$');
            var i;
            for(i = 0; i < saleItemPrice.length; i++) {
                cy.log(saleItemPrice[i])
                saleItemsPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleItemsPrice;
            cy.log("Sale price items total: " + saleItemsPrice)
        })
        .then(() => {
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.equal(572.45)
        })
      });



})