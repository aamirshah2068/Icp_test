import selectors from '../selectors.json'
class IMP{
    Important(){
        cy.buttonClick(selectors.Important_Link.Journals)
        cy.contains(/RESEARCH JOURNALS/i).should('be.visible')

        cy.buttonClick(selectors.Important_Link.Central_Library)
        cy.contains(/HEC DIGITAL LIBRARY/i).should('be.visible')

        cy.buttonClick(selectors.Important_Link.QEC)
        cy.contains(/QUALITY ENHANCEMENT CELL/i).should('be.visible')

        cy.buttonClick(selectors.Important_Link.LMS)
        cy.contains(/Not Found/i).should('be.visible')

        cy.buttonClick(selectors.Important_Link.DITS)
        cy.contains(/DIRECTORATE OF IT SERVICES/i).should('be.visible')

        cy.buttonClick(selectors.Important_Link.Tenders)
        cy.contains(/TENDER NOTICES/i).should('be.visible')

        cy.buttonClick(selectors.Important_Link.Press_Clippings)
        cy.contains(/DAILY NEWS PAPERS CUTTINGS/i).should('be.visible')

        cy.buttonClick(selectors.Important_Link.Scholarships_btn)
        cy.contains(/LIST OF SCHOLARSHIPS/i).should('be.visible')

        cy.buttonClick(selectors.Important_Link.Jobs)
        cy.contains(/ADVERTISEMENTS FOR JOBS/i).should('be.visible')

    }
}

export const imp = new IMP()