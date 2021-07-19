/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />

let Chance = require('chance');
let chance = new Chance();

context('Classes endpoint', () => {
    it('POST - Cadastrar novo professor', () => {


        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": `${chance.first() && chance.last()}`,
                "avatar": "https://static1.purebreak.com.br/articles/1/77/91/@/41158--ele-e-tao-fofinho-que-eu-vou-opengraph_1200-2.jpg",
                "whatsapp": chance.phone({ formatted: false }),
                "bio": chance.word({ length: 20 }),
                "subject": "Biologia",
                "cost": 150,
                "schedule": [
                    {
                        "week_day": "1",
                        "from": "10:00",
                        "to": "11:00"
                    }
                ]
            }
        }).then((resClasses) => {
            expect(resClasses.status).to.eq(201)
            expect(resClasses.duration).to.lt(200)
            expect(resClasses.duration).to.gt(5)
            expect(resClasses.body[0]).to.have.property('class_id').an('number')
            expect(resClasses.body[0]).to.have.property('week_day').an('number')
            expect(resClasses.body[0]).to.have.property('from').an('number')
            expect(resClasses.body[0]).to.have.property('to').an('number')    
            // expect(resClasses.headers)
            //  .to.have.property('x-powered-by') 
            // .an('string') 
        })
    })
})