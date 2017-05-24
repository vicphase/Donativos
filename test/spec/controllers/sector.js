'use strict';

describe('Controller: SectorCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var SectorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SectorCtrl = $controller('SectorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SectorCtrl.awesomeThings.length).toBe(3);
  });
});
