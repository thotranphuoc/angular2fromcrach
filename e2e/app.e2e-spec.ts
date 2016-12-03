import { Ng2fromcrachPage } from './app.po';

describe('ng2fromcrach App', function() {
  let page: Ng2fromcrachPage;

  beforeEach(() => {
    page = new Ng2fromcrachPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
