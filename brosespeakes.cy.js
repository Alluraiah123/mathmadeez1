
describe('My First Test', () => {

it('click on browser all speakers', () => {
    //steps
    cy.visit("https://dev.utaspeakers.com/")
    //cy.get('[class="text-center tagline-font bg-black minXs:px-10 border py-3 text-xs font-extrabold cursor-pointer minXs:w-[240px] w-[360px] maxSm:m-auto px-4 button-hover"]').click();
    cy.get('[placeholder="Search Speakers, Topics, Types"]').type('Dan Abrams').click();
    cy.contains('Dan Abrams').click();
    cy.get('[class="px-[6%] button-style profile-btn-res  button-hover group"]').click();
    cy.get("input[name='firstName']").type("alluraiah")
      cy.get("input[name='lastName']").type("mandla")
    cy.get('[id="rfs-btn"]').click()
    
    
     cy.get('[name="rfs-q"]').type('IN India +91')
     cy.get('[class="ReactFlagsSelect-module_selectOptionValue__vS99-"]').click()
     cy.get("input[name='mobilePhone']").type("9398494572")
    cy.get("input[name='emailAddress']").type("mandlaalluraiah@gmail.com")
    cy.get("input[name='company']").type("ispace")
    cy.contains('Job Title').type('qa')

    cy.contains('--').click()
    cy.contains('$5,000 - $10,000').click()
    cy.contains('--').click()
    cy.get('[class="react-datepicker__day react-datepicker__day--001 react-datepicker__day--outside-month"]').click()

    cy.contains('--').click()
    cy.contains('Book Signing').click()
    cy.contains('--').click()
    cy.contains(' India').click()

    cy.get("input[name='attendees']").type('6')
    cy.get("input[name='eventLocation']").type("hyderabad")
    cy.get('[id="eventDetails"]').type("allu")
    cy.contains('Submit').click()

  })
  })
