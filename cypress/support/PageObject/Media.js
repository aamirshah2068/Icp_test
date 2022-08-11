import selectors from '../selectors.json'
class Media {
    Med() {
        //ICP Anthem drop down 
        // cy.buttonClick(selectors.Media.ICP_Anthem)       //Facebook video

        // cy.contains(/Media/i)
        // Daily news paper drop down 
        cy.buttonClick(selectors.Media.Daily)
        cy.contains(/DAILY NEWS PAPERS CUTTINGS/i).should('be.visible')

        //Right information drop down 
        cy.buttonClick(selectors.Media.Right_Info)
        cy.contains(/SENIORITY LISTS OF STAFF/i).should('be.visible')

        //Right information drop down related Link
        cy.buttonClick(selectors.Media.Minutes_meeting)
        cy.contains(/MINUTES OF THE MEETINGS/i).should('be.visible')

        cy.buttonClick(selectors.Media.Merit)
        cy.contains(/MERIT LIST OF THE RECRUITED EMPLOYEE/i).should('be.visible')

        cy.buttonClick(selectors.Media.List_recruited)
        cy.contains(/LIST OF THE RECRUITED EMPLOYEE SESSION WISE/i).should('be.visible')

        cy.buttonClick(selectors.Media.Rules_regulation)
        cy.contains(/RULES REGULATION/i).should('be.visible')

        cy.buttonClick(selectors.Media.Budget)
        cy.contains(/BUDGET ESTIMATE SESSION WISE/i).should('be.visible')

        cy.buttonClick(selectors.Media.Total_Sanctioned)
        cy.contains(/TOTAL SANCTIONED POST FILL AND VACANT DETAIL/i).should('be.visible')

        cy.buttonClick(selectors.Media.Act_statutes)
        cy.contains(/ACT AND STATUTES/i).should('be.visible')


        //Video Gallery drop down
        cy.buttonClick(selectors.Media.Video_Gallery)
        cy.contains(/VIDEO GALLERY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')

        //Video Gallery drop down related Link
        cy.buttonClick(selectors.Media.Newspaper)
        cy.contains(/DAILY NEWS PAPERS CUTTINGS/i).should('be.visible')

        cy.buttonClick(selectors.Media.Anthem)
        cy.contains(/ISLAMIA COLLEGE PESHAWAR ANTHEM/i).should('be.visible')

        cy.buttonClick(selectors.Media.Picture_gal)
        cy.contains(/PICTURE GALLERY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')

        cy.buttonClick(selectors.Media.Inter)
        cy.contains(/13TH INTERNATIONAL CONFERENCE ON STATISTICAL SCIENCES/i).should('be.visible')

        cy.buttonClick(selectors.Media.Video)
        cy.contains(/VIDEO GALLERY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')

        cy.buttonClick(selectors.Media.Notice)
        cy.contains(/NOTICE BOARD/i).should('be.visible')

        cy.buttonClick(selectors.Media.Old_islamian)
        cy.contains(/OLD ISLAMIAN PICTURES/i).should('be.visible')

        cy.buttonClick(selectors.Media.Staff_notice)
        cy.contains(/STAFF NOTICE BOARD AND COMMITTEES/i).should('be.visible')

        cy.buttonClick(selectors.Media.web_admin)
        cy.contains(/WEB ADMINISTRATOR FOLDER/i).should('be.visible')

        //Picture Gallery drop down
        cy.buttonClick(selectors.Media.Picture_Gallery)
        cy.contains(/PICTURE GALLERY OF ISLAMIA COLLEGE PESHAWAR/i).should('be.visible')
    }
}

export const media = new Media()