//<reference types="cypress" />

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