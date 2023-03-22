/// <reference types="Cypress" />




describe('get api users test',() => {
    let tokenValue = "fac44982a50d26afb72abde521301cae456ba3d83c021ec027410dc1bf214023"
    
    it ('get users API Verification', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                authorization: 'Bearer'+ tokenValue
        }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })


    it.only ('get Single users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                authorization: 'Bearer'+ tokenValue
        }
        }).then((response) => {
            expect(response.status).to.eq(200)
            
            expect(response.headers.Server).to.eq()
        })
    })
})