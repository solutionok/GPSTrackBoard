(function () {
  'use strict';

  angular
    .module('core')
    .controller('HomeController', HomeController);
  HomeController.$inject = ['$scope', '$location', 'Authentication'];

  function HomeController($scope, $location, Authentication) {
    var vm = this;
    vm.authentication = Authentication;
    console.log($location)
  }
}());
