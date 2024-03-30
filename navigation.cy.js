describe('My First Test', () => {
    it('Verify the title of home page', () => {
        //steps
        cy.visit("https://dev.utaspeakers.com/")
        cy.title().should('eq','Speakers | United Talent Agency')

        cy.contains('Categories').click();
        cy.go('back');
        cy.title().should('eq','Speakers | United Talent Agency')
        cy.go('forward');
        cy.contains('Categories').click();
      })
    })