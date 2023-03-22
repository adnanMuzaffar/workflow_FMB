/// <reference types="Cypress" />
const userData=require("../../fixtures/createUser.json")
describe('Post api users test', () => {
    let tokenValue = "fac44982a50d26afb72abde521301cae456ba3d83c021ec027410dc1bf214023"
    let randomText =""
    let testEmail = ""
    // it('post users API Verification', () => {

    //     var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    //     for (var i = 0; i < 10; i++){
    //     randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    //     testEmail = randomText+ '@gmail.com'
    //     }
        
    //     cy.request({ 
    //         method: 'POST',
    //         url: 'https://gorest.co.in/public/v2/users',
    //         headers: {
    //             authorization: 'Bearer ' + tokenValue
    //         },
    //         body: {
    //             "name": userData.name,
    //             "gender": userData.gender,
    //             "email": testEmail,
    //             "status": userData.status
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(201)
    //         cy.log(JSON.stringify(response))
    //         // expect(response.body.name).to.eq("Test Automation")
    //         // expect(response.body.gender).to.eq("male")
    //         // expect(response.body.email).to.eq("AA" + num + "@gmail.com")
    //         // expect(response.body.status).to.eq("active")
    //         expect(response.body).has.property("name", userData.name)
    //         expect(response.body).has.property("gender", userData.gender)
    //         expect(response.body).has.property("email", testEmail)
    //         expect(response.body).has.property("status", userData.status)
    //     })
    // })


    // it('Fixture post users API Verification', () => {

    //     var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    //     for (var i = 0; i < 10; i++){
    //     randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    //     testEmail = randomText+ '@gmail.com'
    //     }
    //      cy.fixture('createUser').then((payload) => {
    //      cy.request({ 
    //         method: 'POST',
    //         url: 'https://gorest.co.in/public/v2/users',
    //         headers: {
    //             authorization: 'Bearer ' + tokenValue
    //         },
    //         body: {
    //             "name": payload.name,
    //             "gender": payload.gender,
    //             "email": testEmail,
    //             "status": payload.status
    //         }
    //     }).then((response) => {
    //         expect(response.status).to.eq(201)
    //         expect(response.body).has.property("name", payload.name)
    //         expect(response.body).has.property("gender", payload.gender)
    //         expect(response.body).has.property("email", testEmail)
    //         expect(response.body).has.property("status", payload.status)
    //     })
    // }) 



it('corealtion POST > GET', () => {

    var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < 10; i++){
    randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail = randomText+ '@gmail.com'
    }
     cy.fixture('createUser').then((payload) => {
     cy.request({ 
        method: 'POST',
        url: 'https://gorest.co.in/public/v2/users',
        headers: {
            authorization: 'Bearer ' + tokenValue
        },
        body: {
            "name": payload.name,
            "gender": payload.gender,
            "email": testEmail,
            "status": payload.status
        }
    }).then((res) => {
        expect(res.status).to.eq(201)
        // expect(res.body.data).has.property("name", payload.name)
        // expect(res.body.data).has.property("gender", payload.gender)
        // expect(res.body.data).has.property("email", testEmail)
        // expect(res.body.data).has.property("status", payload.status)
    }).then((res) => {
        cy.log(JSON.stringify(res))
        const userId = res.body.id
        cy.log("user id is: " + userId)
        cy.request({ 
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/'+userId,
            headers: {
                authorization: 'Bearer ' + tokenValue
            }
        }).then((res) => {
            expect(res.status).to.eq(200)
            expect(res.body).has.property("name", payload.name)
            expect(res.body).has.property("gender", payload.gender)
            expect(res.body).has.property("email", testEmail)
            expect(res.body).has.property("status", payload.status)
            })
        }) 
        })
    })
})