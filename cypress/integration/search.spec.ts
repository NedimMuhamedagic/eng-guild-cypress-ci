import { Root } from '../page-object/Root';
import { Search } from '../page-object/Search';

describe('Search flow', () => {
  const ROOT = new Root();
  const SEARCH = new Search();

  beforeEach(() => {
    ROOT.configure();
    ROOT.visitRoot();
  });
  it('successfully goes through the happy flow', () => {
    // Prepare
    const input = 'ankora';
    ROOT.selectSearchInput().type(input);
    ROOT.selectSearchButton().click();

    // Assert
    cy.url().should('include', `/search?q=${input}`);

    SEARCH.selectSearchItemsContainer().children().should('have.length.above', 0);

    SEARCH.selectSearchItemByIndex(0).should(($item) => {
      const title = $item.children()[0].innerHTML;
      expect(title).to.have.string(input);
    });
  });
});
