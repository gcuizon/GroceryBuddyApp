import { GroceryBuddyClientPage } from './app.po';

describe('grocery-buddy-client App', () => {
  let page: GroceryBuddyClientPage;

  beforeEach(() => {
    page = new GroceryBuddyClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
