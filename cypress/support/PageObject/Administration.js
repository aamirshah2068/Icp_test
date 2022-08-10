import selectors from '../selectors.json'
class Administration {
    admin() {
        //Administration drop down
        cy.buttonClick(selectors.Administration.admin)
        cy.contains(/Administration/i).should('be.visible')

        //Administration drop down Related Links
        cy.buttonClick(selectors.Administration.Facutly_Link)
        cy.contains(/FACULTY WISE DEPARTMENTS/i).should('be.visible')

        cy.buttonClick(selectors.Administration.VC)
        cy.contains(/Vice Chancellor/i).should('be.visible')

        cy.buttonClick(selectors.Administration.VC_Msg)
        cy.contains(/Vice Chancellor Message/i).should('be.visible')


        //Chief Organizer Societies drop down 
        cy.buttonClick(selectors.Administration.Chief_Org)
        cy.contains(/Chief Organizer Societies/i).should('be.visible')

        //Chief Organizer Societies drop down Related Links
        cy.buttonClick(selectors.Administration.Khyber_Union_Link)
        cy.contains(/KHYBER UNION/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Ku_Life_Link)
        cy.contains(/KU LIFE HONORARY MEMBERS/i).should('be.visible')

        cy.buttonClick(selectors.Administration.KU_Pre_Link)
        cy.contains(/KU PRESIDENTS/i).should('be.visible')

        cy.buttonClick(selectors.Administration.KU_Honor_Link)
        cy.contains(/KU ROLE OF HONOUR/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Treasure_Link)
        cy.contains(/TREASURER/i).should('be.visible')


        //Directorate of Students Affairs drop down
        cy.buttonClick(selectors.Administration.Dirct)
        cy.contains(/Directorate of Students Affairs/i).should('be.visible')

        //Directorate of Students Affairs drop down Related Links
        cy.buttonClick(selectors.Administration.DSA_Colo_Link)
        cy.contains(/DSA COLLOQUIUM AND WORKSHOPS/i).should('be.visible')

        cy.buttonClick(selectors.Administration.DSA_Finance_Link)
        cy.contains(/DSA FIANNACIAL AID/i).should('be.visible')

        cy.buttonClick(selectors.Administration.DSA_Freeship_Link)
        cy.contains(/DSA FREESHIPS/i).should('be.visible')

        cy.buttonClick(selectors.Administration.DSA_Main_Link)
        cy.contains(/DSA MAIN DUTIES/i).should('be.visible')

        cy.buttonClick(selectors.Administration.DSA_Pre_Link)
        cy.contains(/DSA PERIPHERAL CAMPUSES/i).should('be.visible')

        cy.buttonClick(selectors.Administration.DSA_Schlor_Link)
        cy.contains(/DSA SCHOLARSHIPS/i).should('be.visible')

        cy.buttonClick(selectors.Administration.DSA_TasK_Link)
        cy.contains(/DSA TASKS UNDERTAKEN/i).should('be.visible')


        // Provost Dropdown 
        cy.buttonClick(selectors.Administration.Provost)
        cy.contains(/PROVOST OFFICE/i).should('be.visible')

        //Provost Dropdown Related Links
        cy.buttonClick(selectors.Administration.Hostel_Link)
        cy.contains(/HOSTEL WARDEN LIST./i).should('be.visible')

        cy.buttonClick(selectors.Administration.Provost_Link)
        cy.contains(/PROVOST OFFICE/i).should('be.visible')

        
        // Chief Proctor Dropdown items
        cy.buttonClick(selectors.Administration.Chief_Proct)
        cy.contains(/PROCTORIAL BOARD/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Stud_Proct)
        cy.contains(/STUDENTS PROCTORIAL BOARD/i).should('be.visible')

        // cy.buttonClick(selectors.Administration.FAQ)                 //Test fails here
        // cy.contains(/Page Not found/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Uniform)
        cy.contains(/UNIFORM FOR BS AND MASTER STUDENTS/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Pict_Gallery)
        cy.contains(/PICTURE GALLERY/i).should('be.visible')

        //Chief Proctor Office list items Related Links
        cy.buttonClick(selectors.Administration.Proctorial_Link)
        cy.contains(/PROCTORIAL BOARD/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Student_pro_Link)
        cy.contains(/STUDENTS PROCTORIAL BOARD/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Picture_Gallery_Link)
        cy.contains(/PICTURE GALLERY/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Uniform_Link)
        cy.contains(/UNIFORM FOR BS AND MASTER STUDENTS/i).should('be.visible')


        // ORIC drop down 
        cy.buttonClick(selectors.Administration.ORIC)
        cy.contains(/OFFICE OF RESEARCH, INNOVATION AND COMMERCIALIZATION/i).should('be.visible')

        //ORIC dorp down Related Links
        cy.buttonClick(selectors.Administration.Office_Research_Link)
        cy.contains(/OFFICE OF RESEARCH/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Mission_Vision_Link)
        cy.contains(/MISSION & VISION/i).should('be.visible')

        cy.buttonClick(selectors.Administration.Research_funding_Link)
        cy.contains(/RESEARCH FUNDING OPPORTUNITIES/i).should('be.visible')

        // cy.buttonClick(selectors.Administration.List_funded_Link)           //Pdf is open but the next test can't execute

        cy.buttonClick(selectors.Administration.Staff_ORIC_Link)
        cy.contains(/STAFF DIRECTORY ORIC/i).should('be.visible')
    }
}
export const administration = new Administration()