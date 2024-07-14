describe('My First Test', () => {
    var amazonPrice;
    it('Amazon test', () => {
        cy.visit('https://www.amazon.in/')
        cy.get("#twotabsearchtextbox").click().type("Let Us C Solutions").type("{enter}");
        cy.contains("Let Us C Solutions -: Authenticate Solutions of Let US C Exercise (English Edition)").invoke('removeAttr', 'target').click();
        cy.get(".a-price-whole").first().then($value => {
            const textValue1 = $value.text();
            amazonPrice = parseInt(textValue1);
        })

        // cy.contains("Add to Cart").click();
        // cy.wait(5000);
        // cy.contains("Proceed to Buy").click({force: true});
        // cy.wait(5000);
    })
    var flipkartPrice;
    it('Flipkart test', () => {
        cy.visit('https://www.flipkart.com/');
        cy.get(".Pke_EE").click().type("Let Us C Solutions").type("{enter}");
        cy.contains("Let Us C Solutions: Authenticate Solutions of Let US C").invoke('removeAttr', 'target').click();
        // var a = cy.get(".hl05eU").invoke('text');
        cy.get(".hl05eU").first().then($value => {
            const textValue = $value.text();
            const a = textValue.replace("₹", "");
            flipkartPrice = parseInt(a);
        })

         // cy.contains("Add to cart").click({force: true});
        // cy.contains("Place Order").click({force: true});
        // cy.wait(5000);

        

    })
    it('Final Result', () => {
        // cy.log("Amazon: " + amazonPrice);
        // cy.log("Flipkart: " + flipkartPrice);
        if(amazonPrice<flipkartPrice){
            cy.log("Amazone is better")
        }
        else{
            cy.log("Flipkart is better")
        }
    })
  })