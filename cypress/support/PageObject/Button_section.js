import selector from "../selectors.json"
class Button {
    input() {

        cy.buttonClick(selector.Buttons.Input_field).type('Computer Science')
        cy.buttonClick(selector.Buttons.Search_btn)
    }

    fb() {
        cy.contains(/Facebook/i).should('be.visible')
        cy.buttonClick(selector.Buttons.Facebook)
    }

    Anthem() {
        cy.contains(/ICP Anthem/i).should('be.visible')
        cy.buttonClick(selector.Buttons.ICP_Anthem_btn)
    }

    Staff() {
        cy.buttonClick(selector.Buttons.Staff_Profile)
        cy.contains(/STAFF DIRECTORY/i).should('be.visible')
    }

    Download() {
        cy.contains(/Download/i).should('be.visible')
        cy.buttonClick(selector.Buttons.Download)
    }
}

export const button = new Button;