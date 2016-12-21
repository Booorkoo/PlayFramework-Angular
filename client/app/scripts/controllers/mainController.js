mainController = function($scope,$rootScope,$state){
	//if($rootScope.isLogged == false){
	//	$state.go('login');
	//}
	 $scope.message = "Hello from the controller!";
        console.log("Usao");
}

var application = angular.module('Application');
application.controller('mainController',['$rootScope','$state',mainController]);