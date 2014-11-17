'use strict';

describe('Service: webSocketSerice', function () {

  // load the service's module
  beforeEach(module('storeGridApp'));

  // instantiate service
  var webSocketSerice;
  beforeEach(inject(function (_webSocketSerice_) {
    webSocketSerice = _webSocketSerice_;
  }));

  it('should do something', function () {
    expect(!!webSocketSerice).toBe(true);
  });

});
