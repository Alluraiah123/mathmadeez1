describe('My First Test', () => {
    it('test1', () => {
      //steps
      cy.visit("https://www.google.com/")
      cy.title().should('eq','google.com')
    })

    it('test2', () => {
        //steps
        cy.visit("https://www.google.com/")
        
      })

      it('test3', () => {
        //steps
        cy.visit("https://www.youtube.com/watch?v=DEqiMEvJvV4&list=PLUDwpEzHYYLvA7QFkC1C0y0pDPqYS56iU&index=3://www.google.com/")
        
      })
  })