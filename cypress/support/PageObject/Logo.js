import selector from "../selectors.json"
class Logo{
    log(){
        cy.buttonClick(selector.Logo.Left_Logo)

        cy.buttonClick(selector.Logo.Right_Logo)
    }
}
export const logo = new Logo;