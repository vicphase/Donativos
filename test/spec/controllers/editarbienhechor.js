'use strict';

describe('Controller: EditarbienhechorCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var EditarbienhechorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarbienhechorCtrl = $controller('EditarbienhechorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarbienhechorCtrl.awesomeThings.length).toBe(3);
  });
});
