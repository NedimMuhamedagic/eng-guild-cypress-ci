import { getConfig } from './config';

export class Root {
  config = getConfig(process.env.NODE_ENV);

  configure = () => {
    cy.viewport(1200, 800);
  };

  visitRoot = () => {
    cy.visit(this.config.baseUrl);
  };

  // Locators

  selectSearchInput = () => cy.get('[data-cy="search-input"]');

  selectSearchButton = () => cy.get('[data-cy="search-button"]');

  // Methods

  doSearch = (text: string) => {
    this.selectSearchInput().type(text);
    this.selectSearchButton().click();
  };
}
