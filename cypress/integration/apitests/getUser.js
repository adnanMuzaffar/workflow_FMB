/// <reference types="Cypress" />

const { method } = require("cypress/types/bluebird")

var tokenValue = "fac44982a50d26afb72abde521301cae456ba3d83c021ec027410dc1bf214023"

describe('get api users test',() => {

    it ('get users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                //authorization: 'Bearer'+ tokenValue
                'authorization': "Bearer fac44982a50d26afb72abde521301cae456ba3d83c021ec027410dc1bf214023"
        }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.meta.pagination.limit).to.eq(20)
        })
       
        
    })

})