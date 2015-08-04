var app = angular.module('hammer');
app.service('MainData', function(){
	var blogPosts = [
		{ text: 'Learn HTLM and CSS'},
		{ text: 'Learn JavaScript and jQuery'},
		{ text: 'Learn Angular'}
	];
	
	this.getPosts = function(){
		return blogPosts
	};
	
	var bgImage = new Image();
	bgImage.src = 'http://www.kennanward.com/i/reg/393.jpg';
	
	this.image = function(){
		return bgImage;
	};
	
	
	
});