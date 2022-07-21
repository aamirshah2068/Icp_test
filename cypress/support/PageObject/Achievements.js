import selectors from '../selectors.json'
class Achievements {
    Achieve() {
        cy.buttonClick(selectors.Achievements.Senior_Alumni)
        cy.contains(/CABINET OF THE SENIOR ALUMNI ASSOCIATION/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Curricular)
        cy.contains(/CURRICULAR/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Sports)
        cy.contains(/ACHIEVEMENTS OF SPORTS DIRECTORATE./i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Khyber_Union)
        cy.contains(/KHYBER UNION - INTRODUCTION/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Student_Creativity)
        cy.contains(/STUDENT’S CREATIVITY CORNER (SCC)/i).should('be.visible')


        // Related Links
        // Senior alumi

        cy.buttonClick(selectors.Achievements.Cabinet_Senior_Alumni)
        cy.contains(/CABINET OF THE SENIOR ALUMNI ASSOCIATION/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Members_Alumni)           //PDF
        cy.contains(/./i).should('be.visible')

        cy.buttonClick(selectors.Achievements.SENIOR_ALUMNI_2017)       //PDF
        cy.contains(/./i).should('be.visible')

        cy.buttonClick(selectors.Achievements.SENIOR_ALUMNI_2016)       //PDF
        cy.contains(/./i).should('be.visible')

        cy.buttonClick(selectors.Achievements.SENIOR_ALUMNI_MEETIN2017)
        cy.contains(/Image Gallery/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.SENIOR_ALUMNI_MEETIN2016)
        cy.contains(/Image Gallery/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.SENIOR_ALUMNI_MEETIN201)
        cy.contains(/Image Gallery/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Constitution_Senior_Association)
        cy.contains(/CONSTITUTION OF THE SENIOR ALUMNI ASSOCIATION/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Senior_Alumni_ceremony)
        cy.contains(/Image Gallery/i).should('be.visible')

        //Curricular Link
        cy.buttonClick(selectors.Achievements.Memorandum)
        cy.contains(/MEMORANDUM OF UNDERSTANDING BETWEEN SEJONG UNIVERSITY, SOUTH KOREA AND ISLAMIA COLLEGE, PESHAWAR./i).should('be.visible')

          cy.buttonClick(selectors.Achievements.MPhil_Produced)
        cy.contains(/MPHIL/i).should('be.visible')
        
        cy.buttonClick(selectors.Achievements.Phd_Produced)
        cy.contains(/LIST OF MPHIL PRODUCED/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Research_Publication)
        cy.contains(/RESEARCH PUBLICATION/i).should('be.visible')

        cy.buttonClick(selectors.Achievements.Dep_Wise)
        cy.contains(/DEPARTMENT-WISE MPHIL/i).should('be.visible')
    }
}

export const achievements = new Achievements()