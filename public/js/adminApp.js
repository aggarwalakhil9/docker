var smlisuzuevents = angular.module('smlisuzuweb', ['ngAnimate', 'ui.router', 'LocalStorageModule', 'ngSanitize'])
.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('webapp');
}])
.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('login', {
      url: "/",
      templateUrl: "../views/login.html",
      controller : 'loginController',
    })
    .state('forgotPassword', {
      url: "/forgotPassword",
      templateUrl: "../views/forgotPassword.html",
      controller : 'loginController',
    })
    .state('signup', {
      url: "/signup",
      templateUrl: "../views/signup.html",
      controller : 'loginController',
    })
    .state('admin', {
      url: "/admin",
      templateUrl: "../views/admin.html",
      controller : 'adminController'
    })
})
.config(function ($provide, $httpProvider,localStorageServiceProvider) {
  // Intercept http calls to add session token in the header.
  // this also checks for session expiry and log's out if session has expired
  $provide.factory('sessionInterceptor', function (localStorageService,$location) {
    return {
        request: function (config) {
            var model = localStorageService.get('completeModel');
            if(model != undefined){
                if(model != ''){
                    config.headers['authorisation'] = model.accessToken;
                }
            }
            return config;
        },
    };
  });

  // Add the interceptor to the $httpProvider.
  $httpProvider.interceptors.push('sessionInterceptor');
})
