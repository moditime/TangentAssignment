'use strict';

/**
 * @ngdoc overview
 * @name tanAppApp
 * @description
 * # tanAppApp
 *
 * Main module of the application.
 */
angular
  .module('tanAppApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])

  .config(function ($stateProvider) {

 $stateProvider.state('show', {
      template: '<ui-view></ui-view>',
      abstract: true
    })
    .state('show.Project', {
      url: '/show/project',
      templateUrl: 'views/list.html',
      controller: 'ProjectCtrl',
     
    })

$stateProvider.state(show.Project);



    
    // $routeProvider
    //   .when('show.project', {
    //     url: '/show/projects',
    //     templateUrl: 'views/list_projects.html',
    //     controller: 'ProjectCtrl',
    //     controllerAs: 'project'
    //   })
    //   .when('/projectList', {
    //     templateUrl: 'views/projectlist.html',
    //     controller: 'ProjectlistCtrl',
    //     controllerAs: 'projectList'
    //   })
    //   .otherwise({
    //     redirectTo: '/'
    //   });
  });
