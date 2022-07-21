import selectors from '../selectors.json'
class Centenary {
    Cent() {
        cy.buttonClick(selectors.Centenary.Progrm_Pic)
        cy.contains(/CENTENARY CELEBRATION PROGRAM/i).should('be.visible')

        //Donations
        cy.buttonClick(selectors.Centenary.Donations)
        cy.contains(/DONATIONS/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Other_Donation)
        cy.contains(/OTHER DONATIONS/i).should('be.visible')

        //Biography
        cy.buttonClick(selectors.Centenary.Teachers_Bio)
        cy.contains(/TEACHERS BIOGRAPHY/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Students_Bio)
        cy.contains(/STUDENTS BIOGRAPHY/i).should('be.visible')

        //Related Links
        cy.buttonClick(selectors.Centenary.Cent_celebration)
        cy.contains(/CENTENARY CELEBRATIONS BEGIN/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Cent_celebra_prg)
        cy.contains(/CENTENARY CELEBRATION PROGRAM/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Rare_Photo)
        cy.contains(/RARE PHOTOGRAPHS/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Pres_khyber)
        cy.contains(/PRESIDENT KHYBER UNION HALL/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Progrm_Pic)
        cy.contains(/PROGRAMS PICTURES/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Day_2)
        cy.contains(/DAY 2 (SATURDAY, DECEMBER 12, 2015)/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Day_3)
        cy.contains(/DAY 3 (SUNDAY, DECEMBER 13, 2015)/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Appreciation_Letter)
        cy.contains(/APPRECIATION LETTER & GRATITUDE FOR CONTRIBUTION IN CENTENARY CELEBRATION./i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Other_donate)
        cy.contains(/OTHER DONATIONS/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Min_Meeting)
        cy.contains(/MINUTES OF THE 2ND MEETING OF CENTRAL COMMITTEE REGARDING CENTENARY CELEBRATIONS/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Donate)
        cy.contains(/DONATIONS/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.cent_Cele_Anthem)
        cy.contains(/CENTENARY CELEBRATION: ICP OFFICIAL ANTHEM/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.ICP_Anthem_enthralls)
        cy.contains(/ISLAMIA COLLEGE ANTHEM ENTHRALLS AUDIENCE AT GOVERNOR HOUSE/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Min_Meeting)
        cy.contains(/MINUTES OF THE MEETINGS/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.First_Meeting)
        cy.contains(/1ST MEETING OF CENTRAL COMMITTEE REGARDING CENTENARY CELEBRATIONS/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Second_Meeting)
        cy.contains(/2ND MEETING OF CENTRAL COMMITTEE REGARDING CENTENARY CELEBRATIONS/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Reg_Cent)
        cy.contains(/REGISTRATION FOR CENTENARY CELEBRATION/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Teach_Bio)
        cy.contains(/TEACHERS BIOGRAPHY/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Stud_Bio)
        cy.contains(/STUDENTS BIOGRAPHY/i).should('be.visible')

        cy.buttonClick(selectors.Centenary.Prog_pic)
        cy.contains(/PROGRAMS PICTURE BY EXTERNAL PHOTOGRAPHERS/i).should('be.visible')        
    }
}
export const centenary = new Centenary()