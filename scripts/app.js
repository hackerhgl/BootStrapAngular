/*JavaScript*/
angular
  .module('BootStrap',['ui.router','ngAnimate'])
  .config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider){
    $urlRouterProvider.otherwise('/')
    function i(e){
      return('<ng-include src="'+e+'"></ng-include>')
    }
    x=""
    x += i("'templates/slider.html'")
    x += i("'templates/bigCallout.html'")
    x += i("'templates/featuresHeading.html'")
    x += i("'templates/moreInfo.html'")
    x += i("'templates/moreCourses.html'")
    $stateProvider
      .state('home',{
        url: '/',
        template: x,
        controller : 'homeController'
      })
  }])
