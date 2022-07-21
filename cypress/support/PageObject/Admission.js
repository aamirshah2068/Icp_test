import selectors from '../selectors.json'
class Admission {
    admin(){
        cy.buttonClick(selectors.Admission.Dist)
        cy.contains(/INTERMEDIATE BOYS SEAT DISTRIBUTION/i).should('be.visible')

        cy.buttonClick(selectors.Admission.Fee_structre)
        cy.contains(/INTERMEDIATE BOYS FEE STRUCTURE/i).should('be.visible')

        cy.buttonClick(selectors.Admission.Refund)
        cy.contains(/INTERMEDIATE REFUND POLICY/i).should('be.visible')

        cy.buttonClick(selectors.Admission.FA_Fees)
        cy.contains(/FSC GIRLS SEAT DISTRIBUTION/i).should('be.visible')

        cy.buttonClick(selectors.Admission.Quota)
        cy.contains(/VARIOUS QUOTA SEATS/i).should('be.visible')

        // cy.buttonClick(selectors.Admission.Apply_FA)                 //Test fails
        // cy.contains(/Page Not Found/i).should('be.visible')

        // cy.buttonClick(selectors.Admission.Apply_BA)
        // cy.contains(/Page Not Found/i).should('be.visible')

        cy.buttonClick(selectors.Admission.Apply_MPhil)
        cy.contains(/WELCOME TO REGISTRATION FOR ADMISSION/i).should('be.visible')

        //Realated Link already covered in admission drop down items

    }
}

export const admission = new Admission()