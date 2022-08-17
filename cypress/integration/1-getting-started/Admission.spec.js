import {admission} from "../../support/PageObject/Admission";

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('https://icp.edu.pk/page.php?abc=201412161253496')
        cy.get('a').each(($el) => {
            cy.request('https://icp.edu.pk/page.php?abc=201412161253496')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("Admission Test", () => {
    beforeEach('open application', () => {
       await cy.visit('/')
        cy.contains('Admission')
    })
    it("Admission drop down", () => {
        admission.admin()
    })
    it("Admission Admission.Apply_FA", () => {
        admission.FA()
    })
    it("Admission Admission.Apply_BA", () => {
        admission.BA()
    })
})