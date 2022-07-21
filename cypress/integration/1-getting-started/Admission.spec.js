import {admission} from "../../support/PageObject/Admission";

// describe('Testing links', () => {
//     it('Get all links status', () => {
//         cy.visit('https://icp.edu.pk/page.php?abc=201412161253496')
//         cy.get('a').each(($el) => {
//             cy.request('https://icp.edu.pk/page.php?abc=201412161253496')
//                 .should((response) => {
//                     expect(response.status).to.eq(200)
//                 })
//         });
//     });
// });

describe("Admission Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.wait(6000)
        cy.contains('Admission')
    })
    it("Admission drop down", () => {
        admission.admin()
    })
})