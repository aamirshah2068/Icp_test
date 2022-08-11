import selector from "../selectors.json"
class Button{
    btn(){

        cy.buttonClick(selector.Buttons.Input_field)
        cy.type('Computer Science')

        cy.buttonClick(selector.Buttons.Search_btn)
        
        cy.buttonClick(selector.Buttons.Facebook)
        cy.contains(/Facebook/i).should('be.visible')
        
        cy.buttonClick(selector.Buttons.ICP_Anthem_btn)
        cy.contains(/ICP Anthem/i).should('be.visible')
        
        cy.buttonClick(selector.Buttons.Staff_Profile)
        cy.contains(/Staff Profile/i).should('be.visible')
        
        cy.buttonClick(selector.Buttons.Download)
        cy.contains(/Download/i).should('be.visible')

    }
}

export const button = new Button;