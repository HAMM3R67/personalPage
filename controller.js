var app = angular.module('hammer');
app.controller('mainCtrl', function($scope, MainData){
	$scope.name = "Trevor Schauerhamer";
	
	$scope.blogs = MainData.getPosts();

});