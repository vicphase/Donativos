'use strict';

describe('Controller: NuevosectorCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var NuevosectorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevosectorCtrl = $controller('NuevosectorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevosectorCtrl.awesomeThings.length).toBe(3);
  });
});
