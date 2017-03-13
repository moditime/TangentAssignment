'use strict';

/**
 * @ngdoc service
 * @name tanAppApp.project
 * @description
 * # project
 * Service in the tanAppApp.
 */
angular.module('tanAppApp')
  .service('projectService', function ($http) {

var services = {
            fetchToken: fetchToken,
            PassToken : PassToken

        };
        return services;


function fetchToken(user,pass) {


 var promise = $http({
                    method: "POST",
                    url: "http://userservice.staging.tangentmicroservices.com:80/api-token-auth/",
                   data: JSON.stringify({ username: user,password:pass})
                })

            return promise;

        }



 function PassToken(tokenid)
 {

console.log("Passing...");
      var prom = $http({
                    method: "GET",
                     headers: {
        "Content-Type": "application/json",
        "Authorization":'Token' +' '+ tokenid
    },
                    url: "http://projectservice.staging.tangentmicroservices.com:80/api/v1/projects/",
     
                })

            return prom;
 }       

  });
