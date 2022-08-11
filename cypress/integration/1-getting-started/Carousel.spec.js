import { carousel } from "../../support/PageObject/Carousel";

describe("Check the functionality of Carousel slider", () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })
    it("Carousel Slider", () => {
        carousel.carou()
    })
})