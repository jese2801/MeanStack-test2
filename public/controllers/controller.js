
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



 


	}]);﻿