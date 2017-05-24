'use strict';

describe('Controller: EditarcoloniaCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var EditarcoloniaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarcoloniaCtrl = $controller('EditarcoloniaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarcoloniaCtrl.awesomeThings.length).toBe(3);
  });
});
