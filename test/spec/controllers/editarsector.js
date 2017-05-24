'use strict';

describe('Controller: EditarsectorCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var EditarsectorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditarsectorCtrl = $controller('EditarsectorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditarsectorCtrl.awesomeThings.length).toBe(3);
  });
});
