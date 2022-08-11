import selectors from "../selectors.json"
class Footer{
    foter(){
        cy.buttonClick(selectors.Footer.Home)

        cy.buttonClick(selectors.Footer.About_Us)
        cy.contains(/HISTORY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')

        cy.buttonClick(selectors.Footer.Department)
        cy.contains(/FACULTY WISE DEPARTMENTS/i).should('be.visible')

        cy.buttonClick(selectors.Footer.Faclty)
        cy.contains(/STAFF DIRECTORY/i).should('be.visible')

        cy.buttonClick(selectors.Footer.Pic_Gallery)
        cy.contains(/PICTURE GALLERY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')

        cy.buttonClick(selectors.Footer.Contct_Us)
        cy.contains(/CONTACTS PHONE DIRECTORY/i).should('be.visible')
    }
}

export const Footer = new Footer();