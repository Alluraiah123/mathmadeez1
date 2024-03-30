describe('My First Test', () => {
    it('Verify the all elements in home page', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.contains('Explore All Speakers').click();
    cy.screenshot("homepage")
    cy.wait(5000)
    cy.get('[class="cursor-pointer logo md:mb-1"]').screenshot('logo');
        })
    })