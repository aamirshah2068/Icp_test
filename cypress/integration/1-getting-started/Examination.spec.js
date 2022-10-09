import { examination } from "../../support/PageObject/Examination";

describe('Testing links', () => {
    it('Get all links status', () => {
        cy.visit('https://icp.edu.pk/exams/index.php?abc=202010200121144')
        cy.get('a').each(($el) => {
            cy.request('https://icp.edu.pk/exams/index.php?abc=202010200121144')
                .should((response) => {
                    expect(response.status).to.eq(200)
                })
        });
    });
});

describe("Examination Test", () => {
    beforeEach('open application', () => {
        cy.visit('/')
        cy.contains('Examination')
    })
    it("Examination", () => {
        examination.Exam()
    })
})