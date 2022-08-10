import { achievements } from "../../support/PageObject/Achievements";

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('https://icp.edu.pk/page.php?abc=201803280504016')
        cy.get('a').each(($el) => {
            cy.request('https://icp.edu.pk/page.php?abc=201803280504016')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("Achievements Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.wait(6000)
        cy.contains('Achievements')
    })
    it("Achievements drop down", () => {
        achievements.Achieve()
    })
})