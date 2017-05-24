'use strict';

describe('Controller: EditardonativoCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var EditardonativoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditardonativoCtrl = $controller('EditardonativoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditardonativoCtrl.awesomeThings.length).toBe(3);
  });
});
