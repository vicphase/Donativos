'use strict';

describe('Controller: NuevobienhechorCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var NuevobienhechorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevobienhechorCtrl = $controller('NuevobienhechorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevobienhechorCtrl.awesomeThings.length).toBe(3);
  });
});
