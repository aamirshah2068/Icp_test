import selector from "../selectors.json"
class Carousel{
    carou(){

        cy.buttonClick(selector.Carousel.Prev)
        cy.buttonClick(selector.Carousel.Next)
    }
}
export const carousel = new Carousel;