import { academic } from "../../support/PageObject/Academic";

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('https://icp.edu.pk/page.php?abc=201412241059034')
        cy.get('a').each(($el) => {
            cy.request('https://icp.edu.pk/page.php?abc=201412241059034')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("Verify that the Academic drop down items are accessible", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('Academic')
    })
    it("Academic drop down", () => {
        academic.Dept()
    })
})