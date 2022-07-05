import selectors from '../selectors.json'
class About {
    History() {
        //Verify that the "History and miltestone" drop down item is loaded successfully
        cy.buttonClick(selectors.about.History)
        cy.contains(/HISTORY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')

        //Verify that the "Quaid-e-Azam" drop down item is loaded successfully
        cy.buttonClick(selectors.about.Quaid)
        cy.contains(/Quaid-e-Azam Muhammad Ali Jinnah's Will /i).should('be.visible')

        //Verify that the "History of Islamia College Peshawar" related link is opened successfully
        cy.buttonClick(selectors.about.His_Peshawar)
        cy.contains(/HISTORY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')

        //Verify that the "QUAID-E-AZAM MUHAMMAD ALI JINNAH WILL" related link is opened successfully
        cy.buttonClick(selectors.about.His_Quaid)
        cy.contains(/QUAID-E-AZAM MUHAMMAD ALI JINNAH WILL/i).should('be.visible')
    }
}
export const about = new About()