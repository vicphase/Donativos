'use strict';

describe('Service: colaborador', function () {

  // load the service's module
  beforeEach(module('donativosApp'));

  // instantiate service
  var colaborador;
  beforeEach(inject(function (_colaborador_) {
    colaborador = _colaborador_;
  }));

  it('should do something', function () {
    expect(!!colaborador).toBe(true);
  });

});
