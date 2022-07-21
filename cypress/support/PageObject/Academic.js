import selectors from '../selectors.json'
class Academic {
    Dept() {

        cy.buttonClick(selectors.Administration.Dept)
        cy.contains(/FACULTY WISE DEPARTMENTS/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Directorate)
        cy.contains(/APPROVED ASRB MINUTES REGULATIONS/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Center_omic)
        cy.contains(/CENTRE INTRODUCTION/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Center_Materials)
        cy.contains(/MISSION/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Student_Regulation)
        // cy.contains(/F /i).should('be.visible')


        //   Related Links
        //   adminLinks
        cy.buttonClick(selectors.Academic.Administration)
        cy.contains(/ADMINISTRATION/i).should('be.visible')

        cy.buttonClick(selectors.Academic.VC_Honour)
        cy.contains(/VICE-CHANCELLOR HONOUR BOARD/i).should('be.visible')

        cy.buttonClick(selectors.Academic.VC_Message)
        cy.contains(/VICE-CHANCELLOR MESSAGE/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Faculty_Departments)
        cy.contains(/FACULTY WISE DEPARTMENTS/i).should('be.visible')

        // DirectorateLinks
        cy.buttonClick(selectors.Academic.Approved)
        cy.contains(/APPROVED ASRB MINUTES/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Academic_Calen)
        cy.contains(/ACADEMIC CALENDAR/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Contact_Us)
        cy.contains(/CONTACT US/i).should('be.visible')

        // OmicLinks
        cy.buttonClick(selectors.Academic.Centre_intro)
        cy.contains(/CENTRE INTRODUCTION/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Degree_Prog)
        cy.contains(/DEGREE PROGRAMS/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Criteria_MPhil)
        cy.contains(/MINIMUM CRITERIA FOR ADMISSION IN MPHIL AND PHD PROGRAMS/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Research_Facilities)
        cy.contains(/RESEARCH FACILITIES/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Collaboration)
        cy.contains(/COLLABORATION WITH NATIONAL /i).should('be.visible')

        cy.buttonClick(selectors.Academic.Staff_Direct)
        cy.contains(/STAFF DIRECTORY IN CENTER FOR OMIC SCIENCES/i).should('be.visible')

        // materialScLinks
        cy.buttonClick(selectors.Academic.Mission)
        cy.contains(/MISSION/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Criteri_MPhil)
        cy.contains(/CRITERIA FOR ADMISSION IN M.PHIL/i).should('be.visible')

        cy.buttonClick(selectors.Academic.Staff_Directory)
        cy.contains(/STAFF DIRECTORY IN CENTER FOR MATERIAL SCIENCES/i).should('be.visible')
    }
}

export const academic = new Academic()
