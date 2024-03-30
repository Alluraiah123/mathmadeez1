

describe('My First Test', () => {
    it.only('enter  the url', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.get('button[class="py-4 text-xs border px-11 tagline-font button-hover"]').click();
      cy.get("input[name='firstName']").type("alluraiah")
      cy.get("input[name='lastName']").type("mandla")
    cy.get('[id="rfs-btn"]').click()
    
    
     cy.get('[name="rfs-q"]').type('IN India +91')
     cy.get('[class="ReactFlagsSelect-module_selectOptionValue__vS99-"]').click()
      //cy.get('#rfs-AS >')

     // cy.get('Country', 'Search').select('IN India +91');


    //cy.contains('IN India +91').click()
    //cy.get('#rfs-btn').click()
    //cy.contains("input[name='rfs-q']").click()
    //cy.contains('Country').click()
    //cy.type('IN India +91').click()
    //cy.contains("Search").click()
   // cy.get('[class="ReactFlagsSelect-module_label__27pw9"]').click()
    //cy.get('#id="rfs-AW').click()
    //.select('IN India +91').click()
    //.should("have.value",'IN India +91')
    //cy.contains('Search', 'IN India +91').click();
    cy.get("input[name='mobilePhone']").type("9398494572")
    cy.get("input[name='emailAddress']").type("mandlaalluraiah@gmail.com")
    cy.get("input[name='company']").type("ispace")
    cy.contains('Job Title').type('qa')
    
    cy.contains('--').click()
    cy.contains('1-5').click()
    cy.contains('--').click()
    cy.contains('$5,000 - $10,000').click()
    cy.contains('Event Location').type("hyderabad").click()
    cy.contains('--').click()
    cy.contains(' India').click()
    
    cy.contains('Additional Details').type("very useful speakers i need").click()
    cy.contains('Submit').click()


  })
})