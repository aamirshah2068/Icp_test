import { newevent } from "../../support/PageObject/New_Event"

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

describe("New_Events Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.wait(6000)
        // cy.contains('Media')
    })
    it("NewEvent", () => {
        newevent.News()
    })
})