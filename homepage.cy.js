describe('My First Test', () => {
    it('Verify the all elements in home page', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")

    
        })

    it('Verify the UTA logo redirection', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.get('[class="cursor-pointer"]').click();
    
      })
    it('Verify the title of home page', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.title().should('eq','Speakers | United Talent Agency')
    
    })
    it('Verify the Categories dropdown in home page', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.contains('Categories').click();
    
    })
    it('Verify the Search text area and Search button displayed', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.contains('Search').click();
    
    })
    it('Verify the Search results with Name of Speaker', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.contains('Search').click();
      cy.get("input[name='searchText']").type("PRIYANKA CHOPRA JONAS").type('{enter}')
    })
    it('Verify the Search auto population functionality by enter 1 char', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.contains('Search').click();
      cy.get("input[name='searchText']").type("P").click()
    })
    it('Verify the Search auto population functionality by enter 2 char', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.contains('Search').click();
      cy.get("[name='searchText']").type("Pr").click()
    })
    it('Verify the Search auto population functionality by enter 3 char', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.contains('Search').click();
      cy.get("[name='searchText']").type("Pri").click()
    })
    it('click on book now  button', () => {
        //steps
        cy.visit("https://dev.utaspeakers.com/")

        //cy.get('[class="text-sm tracking-wider tagline-font"]').click();
      
        
        cy.get('[class="text-sm tracking-wider pl-7 tagline-font cursor-pointer"]').click();
      
      })
      it('click on the login button', () => {
        //steps
        cy.visit("https://dev.utaspeakers.com/")
  cy.get('[class="text-sm font-normal focus:outline-1"]').click();
      
      })
      it('click on the search button', () => {
        //steps
        cy.visit("https://dev.utaspeakers.com/")
        cy.contains('Search').click();
      
      })
      
      it('Verify the Browse All Speakers option in Home and Redirection', () => {
        //steps
        cy.visit("https://dev.utaspeakers.com/")
        cy.get('[class="text-center tagline-font bg-black minXs:px-10 border py-3 text-xs font-extrabold cursor-pointer minXs:w-[240px] w-[360px] maxSm:m-auto px-4 button-hover"]').click();
      
      })
      it('implicit assertions', () => {
        //steps
        cy.visit("https://dev.utaspeakers.com/")
       // cy.url().should('include', 'utaspeakers')
       // cy.url().should('eq', 'https://dev.utaspeakers.com/')
       // cy.url().should('contains', 'speakers')
        
        //cy.url().should('include', 'utaspeakers')
        //.should('eq', 'https://dev.utaspeakers.com/')
        //.should('contains', 'speakers')
        cy.url().and('include', 'utaspeakers')
        .and('eq', 'https://dev.utaspeakers.com/')
        .and('contains', 'speakers')
      })
      it('Verify the Speakers Profile Design in Explore Speakers Section', () => {
        //steps
        cy.visit("https://dev.utaspeakers.com/")
        cy.contains('Explore All Speakers').click();
      })
      it('Verify the Get In Contact option in Home and Redirection', () => {
        //steps
        cy.visit("https://dev.utaspeakers.com/")
        //cy.get('[class="py-4 text-xs border px-11 tagline-font button-hover"]').click();
        //cy.get('button').type('Get In Contact');
        //cy.get('[class="py-4 text-xs border px-11 tagline-font button-hover"]').invoke('button', 'Get In Contact');
        cy.get('button[class="py-4 text-xs border px-11 tagline-font button-hover"]').click();
    })

    it('Verify the footer section on Home page', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.get('[class="flex flex-wrap mt-2 md:flex-row"]').click();
    })
    it('Verify the Home Page > Popular Topics', () => {
      //steps
      cy.visit("https://dev.utaspeakers.com/")
      cy.get('[class="popular-heading"]').click();
    })
  })
