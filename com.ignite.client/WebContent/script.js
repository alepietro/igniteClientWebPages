// Code goes here

var main = angular.module('main', [ 'ngRoute' ]);
main.config(function($routeProvider) {
	redirectTo: 'pages/login.html'
});
