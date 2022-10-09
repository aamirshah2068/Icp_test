import { imp } from "../../support/PageObject/Important_Links"

describe("Important_Links Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('Important Links')
    })
    it("Important_Links Button Section", () => {
        imp.Important()
    })
})