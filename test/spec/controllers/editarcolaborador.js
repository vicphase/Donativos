'use strict';

describe('Controller: EditarcolaboradorCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var EditarcolaboradorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarcolaboradorCtrl = $controller('EditarcolaboradorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarcolaboradorCtrl.awesomeThings.length).toBe(3);
  });
});
