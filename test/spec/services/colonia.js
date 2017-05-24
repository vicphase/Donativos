'use strict';

describe('Service: colonia', function () {

  // load the service's module
  beforeEach(module('donativosApp'));

  // instantiate service
  var colonia;
  beforeEach(inject(function (_colonia_) {
    colonia = _colonia_;
  }));

  it('should do something', function () {
    expect(!!colonia).toBe(true);
  });

});
