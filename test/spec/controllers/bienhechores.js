'use strict';

describe('Controller: BienhechoresCtrl', function () {

  // load the controller's module
  beforeEach(module('donativosApp'));

  var BienhechoresCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BienhechoresCtrl = $controller('BienhechoresCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(BienhechoresCtrl.awesomeThings.length).toBe(3);
  });
});
