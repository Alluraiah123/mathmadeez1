
  describe('Mathmadeez', () => {


    it('Verifymathmadeezwebsite', () => {
        //steps
        cy.visit("https://34.214.19.50/")
       

      cy.contains('Home').click();
     // cy.contains('Services').click();
      //cy.get('a[href="/Packages"]').click({force: true});
      //cy.get('a[href="/Experts"]').click({force: true});
      
      //cy.contains('Services').click();
      //cy.get('a[href="/Packages"]').click({force: true});
      //cy.get('a[href="/Experts"]').click({ multiple: true, force: true });
      
      // Wait for the element to become visible and contain the expected text
cy.contains('SCHEDULE YOUR FIRST LESSON, 50% OFF', { timeout: 10000 })
.should('be.visible') // Ensure the element is visible
.click(); // Click on the element

cy.contains('Schedule Now').click();
//cy.contains('Student First Name:').type('alluri');
cy.get('input[name="studentFirstName"]').type("mandla")
cy.get('input[name="studentLastName"]').type("alluraiah") 
cy.get('input[name="subjectGrade"]').type("A") 
cy.get('input[name="phone"]').type("9398494572") 
cy.get('input[name="email"]').first().type("mandlaalluraiah@gmailcom", {force: true});


cy.get('input[name="additionalDetails"]').type("all the best") 
cy.get('input[name="timeZone"]').click({force: true});


cy.contains('Central TimeZone').click({force: true});
cy.get('#chkTerms').check();
cy.get('button.btn.btn-secondary.sw-btn-next').click();




     // cy.get('[class="dropdown-item"]').click(); 
      //cy.contains('Packages').click();
      })
    })