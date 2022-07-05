import { about } from '../../support/PageObject/About'

describe('Testing links', () => {
    it('Check all links status', () => {
        cy.visit('https://icp.edu.pk/page.php?abc=201412080154134')
        cy.get('a').each(($el) => {
            cy.request('https://icp.edu.pk/page.php?abc=201412080154134')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

context("About drop down items", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('About')
    })
    it("About drop down items", () => {
        about.History()
    })
})