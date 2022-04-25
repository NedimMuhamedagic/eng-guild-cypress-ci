describe('My test suite works!!!', () => {
  it.skip('Inputs some text to the search field in my website and submits the search', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="search-input"]').type('ankora');
    cy.get('[data-cy="search-button"]').click();
    cy.url().should('include', '/search?q=ankora');
  });
});
