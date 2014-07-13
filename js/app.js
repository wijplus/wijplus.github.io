var WijplusApp = angular.module('WijplusApp', ['ngRoute']);
WijplusApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/frontpage.html',
        controller: 'FrontpageController'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactController'
      }).
      when('/menu/lunch', {
        templateUrl: 'partials/menu-lunch.html',
        controller: 'MenuController'
      }).
      when('/menu/takeaway', {
        templateUrl: 'partials/menu-takeaway.html',
        controller: 'MenuController'
      }).
      when('/menu/kaart', {
        templateUrl: 'partials/menu-kaart.html',
        controller: 'MenuController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }])
.controller('FrontpageController', ['$scope', function($scope){
  
}])
.controller('MenuController', ['$scope', function($scope){
  
}])
.controller('ContactController', ['$scope', function($scope){

}]);