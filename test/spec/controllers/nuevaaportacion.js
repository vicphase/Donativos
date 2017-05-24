'use strict';

describe('Controller: NuevaaportacionCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var NuevaaportacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevaaportacionCtrl = $controller('NuevaaportacionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevaaportacionCtrl.awesomeThings.length).toBe(3);
  });
});
