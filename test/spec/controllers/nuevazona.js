'use strict';

describe('Controller: NuevazonaCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var NuevazonaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevazonaCtrl = $controller('NuevazonaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevazonaCtrl.awesomeThings.length).toBe(3);
  });
});
