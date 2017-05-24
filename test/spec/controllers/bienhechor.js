'use strict';

describe('Controller: BienhechorCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var BienhechorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BienhechorCtrl = $controller('BienhechorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BienhechorCtrl.awesomeThings.length).toBe(3);
  });
});
