import { data } from '../fixtures/data.json';
describe('My First Test', () => {
    var amazonPrice;
    it('Amazon test', () => {
        cy.visit(data.amazon.visit)
        cy.get(data.amazon.searchBox).click().type(data.amazon.staticTexts.letUsC).type(data.keyStrokes.enter);
        cy.contains(data.amazon.staticTexts.letUsCSolutions).invoke('removeAttr', 'target').click();
        cy.wait(10000)
        cy.get(data.amazon.priceTag).first().then($value => {
            amazonPrice = $value.text();
            // cy.log(amazonPrice)
        })

        // cy.contains("Add to Cart").click();
        // cy.wait(5000);
        // cy.contains("Proceed to Buy").click({force: true});
        // cy.wait(5000);

    })
    var flipkartPrice;
    it('Flipkart test', () => {
        cy.visit(data.flipkart.visit);
        cy.get(data.flipkart.searchBox).click().type(data.amazon.staticTexts.letUsC).type(data.keyStrokes.enter);
        cy.contains(data.flipkart.staticTexts.letUsCSolutions).invoke('removeAttr', 'target').click();
        cy.get(data.flipkart.priceTag).first().then($value1 => {
            const textValue1 = $value1.text();
            flipkartPrice = textValue1.replace("₹", "");
            // cy.log(flipkartPrice)
        })

        // cy.contains("Add to cart").click({force: true});
        // cy.contains("Place Order").click({force: true});
        // cy.wait(5000);

    })
    it('Final Result', () => {
        // cy.log("Amazon: " + amazonPrice);
        // cy.log("Flipkart: " + flipkartPrice);
        if (parseInt(amazonPrice) > parseInt(flipkartPrice)) {
            cy.log("Amazone is cheaper")
        }
        else {
            cy.log("Flipkart is cheaper")
        }
    })
})