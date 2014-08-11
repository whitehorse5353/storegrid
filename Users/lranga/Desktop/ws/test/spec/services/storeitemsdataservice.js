'use strict';

describe('Service: Storeitemsdataservice', function () {

  // load the service's module
  beforeEach(module('storeGridApp'));

  // instantiate service
  var Storeitemsdataservice;
  beforeEach(inject(function (_Storeitemsdataservice_) {
    Storeitemsdataservice = _Storeitemsdataservice_;
  }));

  it('should do something', function () {
    expect(!!Storeitemsdataservice).toBe(true);
  });

});
