//<reference types="cypress" />

// var iframes = cy.getIframeBody('#casesFrame').find("#casesSubFrame")
//     .its('0.contentDocument.body').find("#openCaseFrame")
//     .its('0.contentDocument.body');

class openCase {//openCaseFrame
    elements = {

        getCaseNumber: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body')
            .find('#caseTabPanel__casesTab>.x-tab-right>.x-tab-left>.x-tab-strip-inner>.x-tab-strip-text'),

        getUploadDocument: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('.pmdynaform-multiplefile-control>input'),

        getAccountType: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('select[id="form[ACC_TYPE]"]'),

        getIDType: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('select[id="form[ID_TYPE]"]'),

        getIDNumber_Input: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[ID_NUM]"]'),

        getCustomerName_Input: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[CUST_NAME]"]'),
        ///CheckList
        getRiskRating_List: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('select[id="form[RISK_RATING]"]'),

        getCopyOfID_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[name="form[COPY_OF_ID][]"]').first(),

        getEmploymentPermit_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[EMPLOYMENT_PERMIT]"]').first(),

        getProofOfAddress_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[PROOF_ADD]"]').first(),

        getUploadedfileName: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('.pmdynaform-mfile-name'),

        getRiskMatrix_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[RISK_MATRIX]"]').first(),

        getPhoto_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[PHOTO]"]').first(),

        getTINCertificate: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[TIN_CERTIFICATE]"]').first(),
        ///Account Details
        getAccountScheme_List: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('select[id="form[ACC_SCHEME_GRID][1][ACCOUNT_SCHEME]"]'),

        getCCY_List: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('select[id="form[CCY_GRID][1][CCY]"]'),

        getChequeBook_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[CHEQUE_BOOK]"]').first(),

        getSMSAlerts_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[SMS_ALERT]"]').first(),

        getInternetBanking_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[INTERNET_BANKING]"]').first(),

        getApprovalForDeferral_Yes_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[DEFERRAL][1]"]'),

        getEBOP_Checkbox: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('input[id="form[EBOP]"]').first(),

        getComment: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('#CMT1> div:nth-child(2)>textarea'),

        getCaseStatusOnSubmit: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('#CASESTATUS1> div:nth-child(2)>textarea'),

        getSubmit_btn: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('button[id="form[SUBMIT]"]'),


        getFormFeildContent: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('.FormFieldContent'),

        getContinue_btn: () => cy.getIframeBody('#casesFrame').find("#casesSubFrame").its('0.contentDocument.body').find("#openCaseFrame").its('0.contentDocument.body')
            .find('#btnContinue').click()

    }

    clickOnCustomerName(value) {
        this.elements.getCustomerName().clear();
        this.elements.getCustomerName().type(value);
    }

    uploadDocument(file) {
        this.elements.getUploadDocument().attachFile(file);
        this.elements.getUploadedfileName().should('have.text', 'sample.png');
        cy.log('Document Uploaded successfully');
    }

    clickOnCaseNumber() {
        this.elements.getCaseNumber().invoke('text')                    // to text
            .then((text) => { cy.log(text) })
    }


}

export default new openCase();
//require(‘cypress-xpath’)