'use strict';

describe('Controller: NuevacoloniaCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var NuevacoloniaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevacoloniaCtrl = $controller('NuevacoloniaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevacoloniaCtrl.awesomeThings.length).toBe(3);
  });
});
