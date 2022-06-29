import { administration } from "../../support/PageObject/Administration";

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('https://icp.edu.pk/page.php?abc=201412080210276')
        cy.get('a').each(($el) => {
            // const herf = $el.attr('href');
            // cy.log(herf);

            cy.request('https://icp.edu.pk/page.php?abc=201412080210276')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("Administration Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('Administration')
    })
    it("Administration drop down", () => {
        administration.abc()
    })
})
