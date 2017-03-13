'use strict';

/**
 * @ngdoc function
 * @name tanAppApp.controller:ProjectlistCtrl
 * @description
 * # ProjectlistCtrl
 * Controller of the tanAppApp
 */
angular.module('tanAppApp')
  .controller('ProjectlistCtrl', function ($scope,projectService) {
    //$scope.login = function () {
    
    var user= $scope.username;
    var pass=$scope.password

  $scope.project_json = [];
    
   var promise=projectService.fetchToken(user,pass)
   promise.then(function(response) {

     var prom=  projectService.PassToken(response.data.token);
         prom.then(function(response) {
            
            //window.location.href = 'views/list.html';
           $scope.project_json=response.data;
          
         })
   })
    
    
     
   //}  
  });
