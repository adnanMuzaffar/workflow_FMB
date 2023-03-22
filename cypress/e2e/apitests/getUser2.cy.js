/// <reference types="Cypress" />

describe('get api users test', () => {
    let tokenValue = "fac44982a50d26afb72abde521301cae456ba3d83c021ec027410dc1bf214023"

    // it('get users API Verification', () => {
    //     cy.request({
    //         method: 'GET',
    //         url: 'https://gorest.co.in/public/v2/users',
    //         headers: {
    //             authorization: 'Bearer' + tokenValue
    //         }
    //     }).then((resp) => {
    //         expect(resp.status).to.eq(200)
    //         const userId = resp.body[0].id
    //         return userId
    //     }).then((userId) => {
    //         cy.request({
    //             method: 'GET',
    //             url: 'https://gorest.co.in/public/v2/users/' + userId
    //         }).then((resp) => {
    //             expect(resp.status).to.eq(200)
    //             expect(resp.body).to.have.property('id', userId)
    //         })

    //     })
    // })

    it('Verify Users', () => {
        cy.request({
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users',
            headers: {
                authorization: 'Bearer' + tokenValue
            }
        }).then((resp) => {
            expect(resp.status).to.eq(200)
            const users = resp.body
            return users
        }).then((users) => {
                for(let i=0 ; i<users.length;i++){
                cy.request({
                    method: 'GET',
                    url: 'https://gorest.co.in/public/v2/users/' + users[i].id
                }).then((resp) => {
                    expect(resp.status).to.eq(200)
                    expect(resp.body).to.have.property('name', users[i].name)
                })
            }
        })
    })
    // it.only('verify all user id', () => {
    //     cy.request({
    //         method: 'GET',
    //         url: 'https://gorest.co.in/public/v2/users',
    //         headers: {
    //             authorization: 'Bearer' + tokenValue
    //         }
    //     }).then((resp) => {
    //         cy.log('first then')
    //         const user = resp.body
    //         return user
    //     }).then((user) => {
    //         cy.log('second')
    //         for (let i = 0; i > user.length; i++) {
    //                 cy.request({
    //                     method: 'GET',
    //                     url: 'https://gorest.co.in/public/v2/users/' + user[i].id

    //                 }).then((resp) => {
    //                     expect(resp.status).to.eq(201)
    //                     expect(resp.body[0]).to.have.property('id', user[i].id)
    //                 })
    //         }
    //     })
    // })

})