(function () {
  'use strict';

  var app = angular.module('ssbm_top_ten');
  app.controller('mainCtrl', function($scope, $http, getData) {
  	$scope.data = {};
    $scope.player_data = {};
    $scope.top_ten = {};
    $scope.current_player = {};
    $scope.hello = {};

    $scope.Math = window.Math;

    $scope.top_ten = function() {   
		getData.top_ten().then(function(data) {
			$scope.top_ten = data;
		});
    };

    $scope.get_player_data = function() {  
		getData.player_data().then(function(data) {
			$scope.player_data = data;
			$scope.calculate_stats();
			$scope.current_player = $scope.player_data.players["Armada"];
		});
    };

    $scope.set_current_player = function() {
    	$scope.current_player = $scope.player_data.players[$scope.hello];
    }

    $scope.calculate_stats = function() {
		angular.forEach($scope.player_data.players, function(value, key) {

			$scope.player_data.players[key].sets_against_gods = 0;
			$scope.player_data.players[key].wins_against_gods = 0;
			$scope.player_data.players[key].losses_against_gods = 0;

			$scope.player_data.players[key].sets_against_demi = 0;
			$scope.player_data.players[key].wins_against_demi = 0;
			$scope.player_data.players[key].losses_against_demi = 0;

			$scope.player_data.players[key].sets_against_all = 0;
			$scope.player_data.players[key].wins_against_all = 0;
			$scope.player_data.players[key].losses_against_all = 0;

			angular.forEach($scope.player_data.players[key].performance, function(v,k) {

				$scope.player_data.players[key].sets_against_all += v.sets;
				$scope.player_data.players[key].wins_against_all += v.wins;
				$scope.player_data.players[key].losses_against_all += v.losses;

				if( $scope.player_data.players[v.tag].rank < 7) {
					$scope.player_data.players[key].sets_against_gods += v.sets;
					$scope.player_data.players[key].wins_against_gods += v.wins;
					$scope.player_data.players[key].losses_against_gods += v.losses;
				}
				else {
					$scope.player_data.players[key].sets_against_demi += v.sets;
					$scope.player_data.players[key].wins_against_demi += v.wins;
					$scope.player_data.players[key].losses_against_demi += v.losses;
				}
			});
		});

		$scope.current_player = $scope.player_data.players["Armada"];
    };

    $scope.top_ten();
    $scope.get_player_data();
  });
 
}());