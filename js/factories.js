(function () {
	'use strict';

	var app = angular.module('ssbm_top_ten');
	app.factory('getData', function($http) {
		return {
			top_ten: function() {
				return $http.get('data/players.json').then(function(result) {
					return result.data;
				});
			},
			player_data: function() {
				return $http.get('data/player_data.json').then(function(result) {
					return result.data;
				});
			}
		}
	});
 
}());