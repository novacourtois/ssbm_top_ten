(function () {
  'use strict';
  
  angular.module('ssbm_top_ten',['chieffancypants.loadingBar', 'ngAnimate', 'ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
    }).    
    otherwise({
        redirectTo: '/'
    });
  }])
  .config(function(cfpLoadingBarProvider) {
      cfpLoadingBarProvider.includeSpinner = true;
  });
})();


