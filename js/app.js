var app = angular.module('hammer', [ngRoute]);

app.config(function($routeProvider, $httpProvider){
	$httpProvider.interceptors.push('httpRequestInterceptor');
	
	$routeProvider
	.when('/', {
		templateUrl: 'index.html',
		controller: 'js/controller'
	})
	.when('/resume', {
		templateUrl: 'Resume/resume.html',
		controller: 'resumeController'
	})
	.otherwise({
		redirectTo: '/'
	})
});