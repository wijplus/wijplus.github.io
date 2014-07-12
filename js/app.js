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
      otherwise({
        redirectTo: '/'
      });
  }])
.controller('FrontpageController', ['$scope', function($scope){
  
}])
.controller('ContactController', ['$scope', function($scope){

}]);