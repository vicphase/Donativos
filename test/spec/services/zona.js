'use strict';

describe('Service: zona', function () {

  // load the service's module
  beforeEach(module('donativosApp'));

  // instantiate service
  var zona;
  beforeEach(inject(function (_zona_) {
    zona = _zona_;
  }));

  it('should do something', function () {
    expect(!!zona).toBe(true);
  });

});
