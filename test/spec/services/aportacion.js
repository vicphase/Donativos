'use strict';

describe('Service: aportacion', function () {

  // load the service's module
  beforeEach(module('donativosApp'));

  // instantiate service
  var aportacion;
  beforeEach(inject(function (_aportacion_) {
    aportacion = _aportacion_;
  }));

  it('should do something', function () {
    expect(!!aportacion).toBe(true);
  });

});
