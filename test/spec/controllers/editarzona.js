'use strict';

describe('Controller: EditarzonaCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var EditarzonaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarzonaCtrl = $controller('EditarzonaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarzonaCtrl.awesomeThings.length).toBe(3);
  });
});
