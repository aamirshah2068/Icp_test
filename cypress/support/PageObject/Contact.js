import selectors from '../selectors.json'
class Contact {
    contac(){

        cy.buttonClick(selectors.Contact.Contacts_Directory)
        cy.contains(/./i).should('be.visible')

        cy.buttonClick(selectors.Contact.Address_ICP)
        cy.contains(/./i).should('be.visible')

        //Realated Links is already covered in drop down
    }
}

export const contact = new Contact()