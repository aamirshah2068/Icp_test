import { newevent } from "../../support/PageObject/New_Event"

describe("New_Events Test", () => {
    beforeEach('open application', () => {
       cy.visit('/')
    })
    it("NewEvent", () => {
        newevent.News()
    })
    it("NewEvent MA", () => {
        newevent.MA()
    })
    it("NewEvent Nominated_cadidates", () => {
        newevent.Nominated_cadidates()
    })
    it("NewEvent Final_electoral", () => {
        newevent.Final_electoral()
    })
})