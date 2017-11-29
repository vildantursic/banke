import { BankeBiznisPage } from './app.po';

describe('banke-biznis App', () => {
  let page: BankeBiznisPage;

  beforeEach(() => {
    page = new BankeBiznisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
