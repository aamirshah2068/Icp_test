import { newevent } from "../../support/PageObject/New_Event"

describe("New_Events Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.wait(6000)
    })
    it("NewEvent", () => {
        newevent.News()
    })
})