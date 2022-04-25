export class Search {
  selectSearchItemsContainer = () => cy.get('[data-cy="search-items"]');

  selectSearchItemByIndex = (idx: number) => cy.get(`[data-cy="search-items"] > :nth-child(${idx + 1})`);
}
