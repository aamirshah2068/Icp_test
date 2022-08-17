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
        await cy.visit('/')
        cy.contains('Achievements')
    })
    it("Achievements drop down", () => {
        achievements.Achieve()
    })

    it("Senior_Alumni", () => {
        achievements.senior()
    })

    it("SENIOR_ALUMNI_2017", () => {
        achievements.Alumni2017()
    })  

    it("SENIOR_ALUMNI_2016", () => {
        achievements.Alumni2016()
    })
})