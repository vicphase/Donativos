'use strict';

describe('Service: colaboradores', function () {

  // load the service's module
  beforeEach(module('donativosApp'));

  // instantiate service
  var colaboradores;
  beforeEach(inject(function (_colaboradores_) {
    colaboradores = _colaboradores_;
  }));

  it('should do something', function () {
    expect(!!colaboradores).toBe(true);
  });

});
