import selectors from "../selectors.json"
class NewEvent{
    News(){
        cy.buttonClick(selectors.New_Event.Visiting_Leturer)
        cy.contains(/APPLICATION ARE INVITED FOR VISITING LECTURER AT VARIOUS DEPARTMENTS/i).should('be.visible')

        cy.buttonClick(selectors.New_Event.MPhil_admission)
        cy.contains(/PHD ADMISSIONS ARE OPEN/i).should('be.visible')

        // cy.buttonClick(selectors.New_Event.Date_sheet_MA)            //Pdf

        // cy.buttonClick(selectors.New_Event.Nominated_candidates)     //Pdf

        cy.buttonClick(selectors.New_Event.Interview)
        cy.contains(/INTERVIEW SCHEDULE FOR THE AWARD OF HEC NEED BASED SCHOLARSHIP 2022/i).should('be.visible')

        // cy.buttonClick(selectors.New_Event.Final_electoral)          //Pdf

        cy.buttonClick(selectors.New_Event.Registration)
        cy.contains(/REGISTRATION OPEN IN ISLAMIA COLLEGE COACHING ACADEMY FOR BOYS AND GIRLS/i).should('be.visible')
    }
}
export const newevent =new NewEvent;