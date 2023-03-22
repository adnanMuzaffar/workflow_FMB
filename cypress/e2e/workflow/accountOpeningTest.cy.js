/// <reference types="cypress"/>

import homePage from '../../pages/homePage';
import openCase from '../../pages/openCase';


//const homePage = new HomePage()

describe('Account Opening Malawi', () => {

    var path;

    beforeEach(() => {
        cy.visitUrl('/');
        cy.login();


        cy.intercept({
            method: 'POST',
            url: `http://10.45.8.34/sysaccount_service/en/neoclassic/cases/casesMenuLoader`
        }).as('casesMenuLoader');


        cy.intercept({
            method: 'POST',
            url: `http://10.45.8.34/sysaccount_service/en/neoclassic/cases/casesList_Ajax`
        }).as('casesList_Ajax');

        cy.intercept({
            method: 'POST',
            url: `http://10.45.8.34/sysaccount_service/en/neoclassic/cases/proxyCasesList`
        }).as('proxyCasesList');

        cy.intercept({
            method: 'POST',
            url: `http://10.45.8.34/sysaccount_service/en/neoclassic/cases/casesMenuLoader?action=getAllCounters&r=*`
        }).as('getAllCountersCasesMenuLoader');

        cy.intercept({
            method: 'POST',
            url: `http://10.45.8.34/sysaccount_service/en/neoclassic/cases/ajaxListener`
        }).as('ajaxListener');

        cy.intercept({
            method: 'POST',
            url: `http://10.45.8.34/sysaccount_service/en/neoclassic/cases/casesStartPage_Ajax?action=getProcessList`
        }).as('getProcessListCasesStartPage_Ajax');

        cy.intercept({
            method: 'POST',
            url: `http://10.45.8.34/sysaccount_service/en/neoclassic/cases/casesStartPage_Ajax`
        }).as('casesStartPage_Ajax');

        ///Case Started
        cy.intercept({
            method: 'POST',
            url: `.45.8.34/sysaccount_service/en/neoclassic/cases/ajaxListener?action=steps`
        }).as('casesStartPage_Ajax_Php');


        cy.intercept({
            method: 'POST',
            url: `http://10.45.8.34/sysaccount_service/en/neoclassic/cases/ajaxListener?action=steps`
        }).as('ajaxListener_Action');

        cy.intercept({
            method: 'GET',
            url: `http://10.45.8.34/api/1.0/*`

        }).as('account_service_Light');

        //cy.wait('@casesMenuLoader')
        cy.wait('@casesList_Ajax')//.then(console.log)
        cy.wait('@proxyCasesList')
        cy.wait('@getAllCountersCasesMenuLoader')

    })
    it('Retail Acounnt Opening', () => {

        path = cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body');
        homePage.clickOnNewCases();

        // path.find('#ext-gen21>div> li:nth-child(2)>ul')
        //     .contains('E-PAY (ZRA/E-NAPSA)-Retail and Corporate - Zambia (Upload document and enter details)').click();

        path.find('#ext-gen21>div> li:nth-child(1)>ul')
            .contains('Account Opening - Malawi').click();

        //cy.wait('5000')
        cy.wait('@casesStartPage_Ajax')
        cy.get("#casesFrame")
            .its('0.contentDocument')
            .its('body')
            .find("#casesSubFrame")
            .its('0.contentDocument')
            .its('body')
            .find('#ext-gen55').click();

        //cy.wait(['@opportunity-value', '@proposal-summary', '@opportunity-value'], { timeout: 50000 });

        cy.wait('@ajaxListener')
        cy.wait(3000)


        var fixtureFile = 'workflow/sample.png';

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('.pmdynaform-multiplefile-control>input')
            .attachFile(fixtureFile)

        cy.wait(1000)
        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('select[id="form[ACC_TYPE]"]').select('RETAIL')

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('select[id="form[ID_TYPE]"]').select('PASSPORT')

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[ID_NUM]"]').type('11122233445566')

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[CUST_NAME]"]').type('Nasir Shah')
        cy.wait(1000)

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('select[id="form[RISK_RATING]"]').select('LOW')


        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[name="form[COPY_OF_ID][]"]').first()
            .should('be.visible').check();

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[EMPLOYMENT_PERMIT]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[PROOF_ADD]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[PROOF_ADD]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[RISK_MATRIX]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[PHOTO]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[TIN_CERTIFICATE]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('select[id="form[ACC_SCHEME_GRID][1][ACCOUNT_SCHEME]"]').select('CALL')

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('select[id="form[CCY_GRID][1][CCY]"]').select('ZMW')

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[CHEQUE_BOOK]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[SMS_ALERT]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[INTERNET_BANKING]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[DEFERRAL][1]"]')
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('input[id="form[EBOP]"]').first()
            .should('be.visible').check().should('be.checked');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('#CMT1> div:nth-child(2)>textarea').type('Approved Case Assiging to Branch Maker.')

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('#CASESTATUS1> div:nth-child(2)>textarea').contains('ASSIGN TO BRANCH MANAGER');



        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('button[id="form[SUBMIT]"]').click();

        cy.wait(3500);
        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('.FormFieldContent').contains('Verifies the Details');

        cy.getIframeBody('#casesFrame').find("#casesSubFrame")
            .its('0.contentDocument.body').find("#openCaseFrame")
            .its('0.contentDocument.body')
            .find('#btnContinue').click();

            cy.wait(3000)
        cy.wait('@casesList_Ajax')
        cy.wait('@proxyCasesList')
        cy.wait('@getAllCountersCasesMenuLoader')




    })


})
