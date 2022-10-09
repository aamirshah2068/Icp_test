import { centenary } from "../../support/PageObject/Centenary_Celebration";

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('https://icp.edu.pk/page.php?abc=201512010424176')
        cy.get('a').each(($el) => {
            cy.request('https://icp.edu.pk/page.php?abc=201512010424176')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("Centenary_Celebration Test", () => {
    beforeEach('open application', () => {
       cy.visit('/')
        cy.wait(6000)
        cy.contains('Centenary Celebration')
    })
    it("Centenary_Celebration drop down", () => {
        centenary.Cent()
    })
})