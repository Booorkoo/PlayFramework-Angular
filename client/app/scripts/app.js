/**
 * @ngdoc overview
 * @name Application
 * @description
 * # Application
 * 
 * Main module of the application.
 */
 (function(angular){
	
	var loginModule = angular.module('loginModule',[]);

 
 
	var application = angular.module('Application', ['ui.router','loginModule']);
	

 })(angular);
