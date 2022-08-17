import {button} from "../../support/PageObject/Button_section"

describe("Verify the funcionality of social buttons", () => {
    beforeEach('open application', () => {
        cy.visit('/')
    })
    it("Input field & Search button", () => {
        button.input()
    })
    it("Facebook button", () => {
        button.fb()
    })
    it("Anthem button", () => {
        button.Anthem()
    })
    it("Staff button", () => {
        button.Staff()
    })
    it("Download button", () => {
        button.Download()
    })
})