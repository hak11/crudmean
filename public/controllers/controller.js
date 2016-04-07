var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$http.get('contactlist').success(function(response){
	console.log("saya mendapatkan data dari serverjs");
	$scope.contactlist = response;
});
 
}]);