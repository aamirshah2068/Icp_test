import { logo } from "../../support/PageObject/Logo";

describe("Logo's Verification", () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })
    it("Rigt and Left Logo's", () => {
        logo.log()
    })
})