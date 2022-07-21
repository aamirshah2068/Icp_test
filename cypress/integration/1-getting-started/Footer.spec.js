import { Footer } from "../../support/PageObject/Footer";

describe("Administration Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('Footer')
    })
    it("Footer drop down", () => {
        Footer.foter()
    })
})