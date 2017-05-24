'use strict';

describe('Controller: ZonaCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var ZonaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ZonaCtrl = $controller('ZonaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ZonaCtrl.awesomeThings.length).toBe(3);
  });
});
