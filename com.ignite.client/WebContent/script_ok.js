// Code goes here

var demo = angular.module('demo', [ 'ngRoute' ]);
demo.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'login.html'
	}).when('/home', {
		templateUrl : 'dummy.html'/*
									 * , controller: 'myController'
									 */
	}).otherwise({
		redirectTo : '/'
	});
});
/*
 * app.controller('myController', myController); function myController(){ var vm =
 * this;
 * 
 * vm.personen = [ {name: 'Schrooten', voornaam: 'Mathias'} ];
 * 
 * vm.addNaam = function(){ var newName = { voornaam: this.voornaam, name:
 * this.name }; this.personen.push(newName); window.alert('Persoon toegevoegd!') } }
 */