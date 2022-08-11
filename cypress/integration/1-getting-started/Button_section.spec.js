import {button} from "../../support/PageObject/Button_section"

describe("Verify the funcionality of social buttons", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.wait(7000)
        cy.contains('Button')
    })
    it("Button Section", () => {
        button.btn()
    })
})