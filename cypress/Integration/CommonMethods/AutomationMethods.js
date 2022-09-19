var pattern = /(\d{4})/ //Pattern to match and extract only 4 digit integers
var PaulBirthYearMatch, JohnBirthYearMatch 
class AutomationMethods
{     
    //common locators
    GetPaulParagraph(){return cy.get('.mw-body-content p');}
    GetJohnParagraph(){return cy.get('.mw-parser-output p');} 
    GetUrl(name){
        //Locators for Url
     cy.get('a[title=\''+name+'\']').eq(0).should('be.visible').click()
    }
    //common Methods 
    GetPaulParagraghSection(){

        //Fetch Paul birth year
        this.GetPaulParagraph().then(($el)=>{
            var fullText = $el.text()
            PaulBirthYearMatch = fullText.match(pattern)
            cy.wrap(PaulBirthYearMatch[0]).as('PaulBirthyearAliased')
        })
    }
    GetJohnParagraphSection(){

        //Fetch John birth year
        this.GetJohnParagraph().then(($el)=>{
            var fullText= $el.text()
            JohnBirthYearMatch = fullText.match(pattern);
            cy.wrap(JohnBirthYearMatch[0]).as('JohnBirthYearAliased') 
        })
    }
}
export default AutomationMethods

