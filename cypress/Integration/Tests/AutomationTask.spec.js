/// <reference types="Cypress" />
import AutomationMethods from "../CommonMethods/AutomationMethods"
import data from '../../fixtures/Beatles.json'

describe(" Automation task",()=>{

    //Initilisation of common methods
    var automationMethods = new AutomationMethods();
    Cypress.Screenshot.defaults({ capture: 'runner' });
    before(function(){
        
        //visit and assert the Beatles home page
        cy.visit(Cypress.env('base_url')) 
        cy.title().should('eq','The Beatles - Wikipedia') 

    })
    it('Automation Task',()=>{

        //Click on the first visible Paul McCartney Url link and assert title
        automationMethods.GetUrl(data.Name1)
        cy.title().should('eq','Paul McCartney - Wikipedia')
        //cy.screenshot('Paul McCartney - Wikipedia')
        //Get Paul McCartney birth year
        automationMethods.GetPaulParagraghSection()
         
        //visit and assert the Beatles home page
        cy.visit(Cypress.env('base_url'))
        cy.title().should('eq','The Beatles - Wikipedia')

        //Click on the first visible John Lennon’s Url link and assert title
        automationMethods.GetUrl(data.Name2)
        cy.title().should('eq','John Lennon - Wikipedia')

        //Get John Lennon’s birth year
        automationMethods.GetJohnParagraphSection()
        //cy.screenshot('John Lennon - Wikipedia')

        //compare the fetched year and assert
        cy.get('@PaulBirthyearAliased').then((paulBirthYear) => {
            cy.get('@JohnBirthYearAliased').then((johnBirthYear) => {
                //Assert that John Lennon was born before Paul McCartney
                cy.log("Paul Birth Year is "+paulBirthYear+" and John Birth year is "+johnBirthYear)
                expect(+johnBirthYear).to.be.lessThan(+paulBirthYear) 

                //cy.screenshot('Assert')
             })
        })
    })
   
})