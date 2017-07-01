'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /trades when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/trades");
  });


  describe('trades', function() {

    beforeEach(function() {
      browser.get('index.html#!/trades');
    });


    it('should render trades when user navigates to /trades', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('new-trade', function() {

    beforeEach(function() {
      browser.get('index.html#!/new-trade');
    });


    it('should render new-trade when user navigates to /new-trade', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
