describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/getBallotData', {fixture: 'ballots'})
    cy.visit('http://localhost:3000')
  })

  it('should have a title header', () => {
    cy.get('h1').contains('Awards 2022')
  })

  it('should should render different ballots', () => {
    cy.get('.ballot__header').should('have.length', 2)
    cy.get('.ballot__header').first().contains('Best Picture')
    cy.get('.ballot__header').eq(1).contains('Best Director')
  })

  it('should should render a card for each nominee', () => {
    cy.get('.nominee__card').should('have.length', 10)
  })
  
  it('should should render 5 nominees for each ballot', () => {
    cy.get('.nominees').first().children().should('have.length', 5)
  })



})