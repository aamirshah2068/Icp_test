import { contact } from "../../support/PageObject/Contact";

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('https://icp.edu.pk/page.php?abc=201412300248325')
        cy.get('a').each(($el) => {
            cy.request('https://icp.edu.pk/page.php?abc=201412300248325')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("Contact Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('Contact')
    })
    it("Contact", () => {
        contact.contac()
    })
})