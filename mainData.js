var app = angular.module('hammer');
app.service('MainData', function(){
	var blogPosts = [
		{ text: '1st blog post'},
		{ text: '2nd post'},
		{ text: '3rd post'}
	];
	
	this.getPosts = function(){
		return blogPosts
	};
	

	
	
	
});