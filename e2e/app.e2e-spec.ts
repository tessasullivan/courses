import { CoursesPage } from './app.po';

describe('courses App', () => {
  let page: CoursesPage;

  beforeEach(() => {
    page = new CoursesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
