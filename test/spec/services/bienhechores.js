'use strict';

describe('Service: bienHechores', function () {

  // load the service's module
  beforeEach(module('donativosApp'));

  // instantiate service
  var bienHechores;
  beforeEach(inject(function (_bienHechores_) {
    bienHechores = _bienHechores_;
  }));

  it('should do something', function () {
    expect(!!bienHechores).toBe(true);
  });

});
