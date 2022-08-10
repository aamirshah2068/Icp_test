import selectors from '../selectors.json'
class Examination{
    Exam(){
        //Only related links no drop down menu is appear
        
        cy.buttonClick(selectors.Examination.Exam)
        
        cy.buttonClick(selectors.Examination.News_update)
        cy.contains(/NEWS AND UPDATES/i).should('be.visible')

        cy.buttonClick(selectors.Examination.Date_sheets)
        cy.contains(/DATE SHEETS/i).should('be.visible')

        cy.buttonClick(selectors.Examination.Results)
        cy.contains(/RESULT SHEETS SPRING 2020/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.Exam)

        cy.buttonClick(selectors.Examination.Examination_rules)
        cy.contains(/EXAMINATION RULES/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.Downloads)
        cy.contains(/DOWNLOADS/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.semester_toppers)
        cy.contains(/SEMESTER TOPPERS LIST/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.MPhil_Rollno)
        cy.contains(/MPHIL/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.Entry_Test)
        cy.contains(/ENTRY TEST RESULT MPHIL/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.MA_Composite)
        cy.contains(/MA COMPOSITE ANNUAL EXAMINATION RESULT 2021/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.MPhil_provisionally)
        cy.contains(/PHD PROVISIONALLY ADMITTED STUDENTS/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.Islamia_collegiate)
        cy.contains(/ISLAMIA COLLEGIATE SCHOOL ADMISSION ENTRANCE TEST RESULT/i).should('be.visible')
        
        cy.buttonClick(selectors.Examination.Islamia_collegiate_waitinglist)
        cy.contains(/ISLAMIA COLLEGIATE SCHOOL ADMISSION WAITING LIST/i).should('be.visible')    
    }
}

export const examination = new Examination;