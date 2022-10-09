import { footer, Footer } from "../../support/PageObject/Footer";

describe("Footer Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })
    it("Footer drop down", () => {
        footer.foter()
    })
})