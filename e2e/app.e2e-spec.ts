import { LojinhaPage } from './app.po';

describe('lojinha App', () => {
  let page: LojinhaPage;

  beforeEach(() => {
    page = new LojinhaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
