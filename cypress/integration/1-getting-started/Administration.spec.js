import { administration } from "../../support/PageObject/Administration";

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('https://icp.edu.pk/page.php?abc=201412080210276')
        cy.get('a').each(($el) => {
            cy.request('https://icp.edu.pk/page.php?abc=201412080210276')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("Verify that the Administration drop down items are accessible", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('Administration')
    })
    it("Administration drop down", () => {
        administration.admin()
    })
})