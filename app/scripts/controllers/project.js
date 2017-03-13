'use strict';

/**
 * @ngdoc function
 * @name tanAppApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the tanAppApp
 */
angular.module('tanAppApp',['ui.router'])
  .controller('ProjectCtrl', function ($scope,$state,projectService) {
   $scope.login = function () {
    
    var user= $scope.username;
    var pass=$scope.password

  $scope.project_json = [];
    
   var promise=projectService.fetchToken(user,pass)
   promise.then(function(response) {

     console.log("Token",response.data.token);

     var prom=  projectService.PassToken(response.data.token);
         prom.then(function(response) {

              console.log("Project Json",response.data);   

           //window.location.href = 'views/list.html';
           $scope.project_json=response.data;
           $scope.name="Moditime";

           console.log("Array",$scope.project_json);
           $state.go('show.Project');
          
         })
   })
    
    
     
    }        
  
  });
