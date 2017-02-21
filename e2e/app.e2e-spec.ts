import { MyTriviaAppPage } from './app.po';

describe('my-trivia-app App', function() {
  let page: MyTriviaAppPage;

  beforeEach(() => {
    page = new MyTriviaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
