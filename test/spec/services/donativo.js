'use strict';

describe('Service: donativo', function () {

  // load the service's module
  beforeEach(module('donativosApp'));

  // instantiate service
  var donativo;
  beforeEach(inject(function (_donativo_) {
    donativo = _donativo_;
  }));

  it('should do something', function () {
    expect(!!donativo).toBe(true);
  });

});
