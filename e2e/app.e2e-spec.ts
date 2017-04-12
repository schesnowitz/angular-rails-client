import { DriverTrackPage } from './app.po';

describe('driver-track App', () => {
  let page: DriverTrackPage;

  beforeEach(() => {
    page = new DriverTrackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
