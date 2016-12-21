var application = angular.module("Application");

application.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider)
{
	$urlRouterProvider.otherwise('/Home');
	
	$stateProvider
	.state('Login', {
		url: '/Login',
		templateUrl: 'views/loginForm.html',
		controller: 'loginController'
	})
	.state('Home', {
		url: '/Home',
		template: '<h1>My Home</h1>'
	})
	
}]);