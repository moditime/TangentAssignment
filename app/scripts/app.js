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

  .config(function ($routeProvider) {
    $routeProvider
      .when('show.project', {
        url: '/show/projects',
        templateUrl: 'views/list_projects.html',
        controller: 'ProjectCtrl'
        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
