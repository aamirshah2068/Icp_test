import { media } from "../../support/PageObject/Media";

// describe('Testing links', () => {
//     it('Get all links status', () => {
//         cy.visit('https://icp.edu.pk/page.php?abc=201608181052425')
//         cy.get('a').each(($el) => {
//             cy.request('https://icp.edu.pk/page.php?abc=201608181052425')
//                 .should((response) => {
//                     expect(response.status).to.eq(200)
//                 })
//         });
//     });
// });

describe("Media Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.wait(6000)
        cy.contains('Media')
    })
    it("Contact", () => {
        media.Med()
    })
})