import {button} from "../../support/PageObject/Button_section"

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('')
        cy.get('a').each(($el) => {
            cy.request('')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('Button')
    })
    it("Button Section drop down", () => {
        button.btn()
    })
})