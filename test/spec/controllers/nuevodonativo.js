'use strict';

describe('Controller: NuevodonativoCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var NuevodonativoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NuevodonativoCtrl = $controller('NuevodonativoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NuevodonativoCtrl.awesomeThings.length).toBe(3);
  });
});
