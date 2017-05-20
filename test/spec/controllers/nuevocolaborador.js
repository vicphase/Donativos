'use strict';

describe('Controller: NuevocolaboradorCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var NuevocolaboradorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevocolaboradorCtrl = $controller('NuevocolaboradorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevocolaboradorCtrl.awesomeThings.length).toBe(3);
  });
});
