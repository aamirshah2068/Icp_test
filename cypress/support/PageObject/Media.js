import selectors from '../selectors.json'
class Media {
    Med(){
        cy.buttonClick(selectors.Media.ICP_Anthem)
        cy.contains(/./i).should('be.visible')

        cy.buttonClick(selectors.Media.Daily_News)
        cy.contains(/./i).should('be.visible')

        cy.buttonClick(selectors.Media.Right_Info)
        cy.contains(/./i).should('be.visible')

        cy.buttonClick(selectors.Media.Video_Gallery)
        cy.contains(/./i).should('be.visible')

        cy.buttonClick(selectors.Media.Picture_Gallery)
        cy.contains(/./i).should('be.visible')
    }
}

export const media = new Media()