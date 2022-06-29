import selectors from '../selectors.json'
class Administration {
    abc(){

        //Verify the the administratin drop down is loaded successfully
        cy.buttonClick(selectors.Administration.VC)
        cy.contains(/Vice Chancellor /i).should('be.visible')

        //Verify that the vc message is appear
        cy.buttonClick(selectors.Administration.VC_Msg)
        cy.contains(/Vice Chancellor Message/i).should('be.visible')

        //Verify that the Chief organizer Societies loaded successfully
        cy.buttonClick(selectors.Administration.Chief_Org)
        cy.contains(/Chief Organizer Societies/i).should('be.visible')


        cy.buttonClick(selectors.Administration.Dirct)
        cy.contains(/Directorate of Students Affairs/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Provost)
        cy.contains(/Provost/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Chief_Proct)
        cy.contains(/Chief Proctor Office/i).should('be.visible')

        cy.buttonClick(selectors.Administration.ORIC)
        cy.contains(/ORIC/i).should('be.visible')

    }
}

export const administration = new Administration()
