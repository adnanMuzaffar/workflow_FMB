//<reference types="cypress" />

class homePage {
    elements = {
        getCasesIcon: () => cy.getIframeBody('#casesFrame')
            .find('#ext-gen36>div> li:nth-child(1)>div'),
        getNewCases: () => cy.getIframeBody('#casesFrame')
            .find('#ext-gen36>div> li:first-of-type>ul > li:nth-child(1)>div>a'),
        getGeneratedCases: () => cy.getIframeBody('#casesFrame')
            .find('#ext-gen36>div> li:first-of-type>ul > li:nth-child(2)>div>a'),
        getMyCases: () => cy.getIframeBody('#casesFrame')
            .find('#ext-gen36>div> li:first-of-type>ul > li:nth-child(3)>div>a'),
        getAllCases: () => cy.getIframeBody('#casesFrame')
            .find('#ext-gen36>div> li:first-of-type>ul > li:nth-child(4)>div>a'),

        //Search
        getSearch: () => cy.getIframeBody('#casesFrame')
            .find('#ext-gen36>div> li:nth-child(2)>div >a'),
        getAdvanceSearch: () => cy.getIframeBody('#casesFrame')
            .find('#ext-gen36>div> li:nth-child(2)>ul > li:nth-child(1)>div>a'),
        //Account Services
        getAccountServicesMalawi: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find('#ext-gen21>div> li:nth-child(1)>ul'),

        getAccountServicesZambia: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find('#ext-gen21>div> li:nth-child(2)>ul'),

        getAccountServicesBotswana: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find('#ext-gen21>div> li:nth-child(2)>ul'),
        /////Menu Bar
        getfindProcess: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame"
        ).its('0.contentDocument.body').find('#processesFilter'),


        ////Process Information
        getStartCasebtn: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame"
        ).its('0.contentDocument.body').find('#ext-gen55'),

        getProcessDescription: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame"
        ).its('0.contentDocument.body').find('#processDescription'),

        getCategory: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find('#processCategory'),

    }

    clickOnNewCases() {
        this.elements.getNewCases().click();
    }

    clickOnGeneratedCases() {
        this.elements.getGeneratedCases().click();
    }

    clickOnMyCases() {
        this.elements.getMyCases().click();
    }

    clickOnAllCases() {
        this.elements.getAllCases().click();
    }

    clickOnAdvanceSearch() {
        this.elements.getAdvanceSearch().click();
    }

    selectAccountService_Malawi(value) {

        this.elements.getAccountServicesMalawi().contains(value).click();

    }

    clickOnStartCase_btn() {
        this.elements.getStartCasebtn().click();
    }


}

export default new homePage();
//require(‘cypress-xpath’)