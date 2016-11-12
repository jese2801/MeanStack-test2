
var controlApp = angular.module('controlApp',[]);
controlApp.controller('micontroller', ['$scope', '$http', function($scope, $http){
	$scope.user="";

	var refresh = function() {
		$http.get('/app/user').success(function(response) {
			$scope.user = response;
		});
	};

	refresh();

	

	$scope.logout = function() {
		$scope.logout = "/";
		$http.get('/app/logout').success(function(response) {
			$scope.user = "";
		});
	}


$scope.listarCursos = function(){

     $http.get('/app/Courses').success(function(response){
        $scope.courses = response;   
     });
   };

  var Ocultaraccion=function(){

    for (var i = $scope.courses.length - 1; i >= 0; i--) {
      $('#'+$scope.courses[i]._id).attr('style','display:none');
    }

  };
  $scope.accion=function(id){
    Ocultaraccion();
    $('#'+id).removeAttr("style");

  };
 


	}]);﻿