'use strict';

describe('Service: bienhechor', function () {

  // load the service's module
  beforeEach(module('donativosApp'));

  // instantiate service
  var bienhechor;
  beforeEach(inject(function (_bienhechor_) {
    bienhechor = _bienhechor_;
  }));

  it('should do something', function () {
    expect(!!bienhechor).toBe(true);
  });

});
