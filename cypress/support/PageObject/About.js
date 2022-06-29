import selectors from '../selectors.json'
class About {
    History(){
        //Verify the the about drop down is loaded successfully
        cy.buttonClick(selectors.about.History)        
        cy.contains(/HISTORY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')

        cy.buttonClick(selectors.about.Quaid)
        cy.contains(/Quaid-e-Azam Muhammad Ali Jinnah's Will /i).should('be.visible')
    }
}
export const about = new About()