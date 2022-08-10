import selectors from '../selectors.json'
class Achievements {
    Achieve() {
        // Senior alumi drop down
        cy.buttonClick(selectors.Achievements.Senior_Alumni)
        cy.contains('Cabinet of the Senior Alumni Association').should('be.visible')

        // Senior alumi drop down related links
        // cy.buttonClick(selectors.Achievements.Members_Alumni)           //PDF

        // cy.buttonClick(selectors.Achievements.SENIOR_ALUMNI_2017)       //PDF

        // cy.buttonClick(selectors.Achievements.SENIOR_ALUMNI_2016)       //PDF

        cy.buttonClick(selectors.Achievements.SENIOR_ALUMNI_MEETIN201)
        cy.contains(/Image Gallery/i).should('be.visible')
        cy.wait(5000)

        //Curricular drop down
        cy.buttonClick(selectors.Achievements.Senior_Alumni)

        cy.buttonClick(selectors.Achievements.Curricular)
        cy.contains(/CURRICULAR/i).should('be.visible')

        //Curricular drop down related links
        cy.buttonClick(selectors.Achievements.Memorandum)
        cy.contains(/MEMORANDUM OF UNDERSTANDING BETWEEN SEJONG UNIVERSITY/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.MPhil_Produced)
        cy.contains(/MPHIL/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Phd_Produced)
        cy.contains(/LIST OF MPHIL PRODUCED/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Research_Publication)
        cy.contains(/RESEARCH PUBLICATION/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Memo_under)
        cy.contains(/MEMORANDUM OF UNDERSTANDING BETWEEN IHSAN TRUST AND ISLAMIA COLLEGE/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Dep_Wise)
        cy.contains(/DEPARTMENT/i).should('be.visible')
    }
}
export const achievements = new Achievements()