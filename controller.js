var app = angular.module('hammer');
app.controller('mainCtrl', function($scope, MainData){
	$scope.name = "T.Schauerhamer";
	
	$scope.blogs = MainData.getPosts();

	$scope.image = 'bgBear.jpg';
});