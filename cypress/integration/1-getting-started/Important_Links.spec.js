import { imp } from "../../support/PageObject/Important_Links"

describe("Important_Links Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.wait(6000)
        cy.contains('Important_Links')
    })
    it("Important_Links Button Section", () => {
        imp.Important()
    })
})