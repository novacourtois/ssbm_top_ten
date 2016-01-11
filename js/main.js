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
      console.log('players');
      getData.top_ten().then(function(data) {
        $scope.top_ten = data;
        console.log($scope.top_ten.players);
        console.log('--');
      });
    };

    $scope.get_player_data = function() {        
      console.log('player_data');
      getData.player_data().then(function(data) {
        console.log(data);
        $scope.player_data = data;
        
        $scope.calculate_stats();
        $scope.current_player = $scope.player_data.players["Armada"];
      });
    };

    $scope.set_current_player = function() {
    	console.log('-----------------------------------');
    	console.log(name);
    	$scope.current_player = $scope.player_data.players[$scope.hello];
    	console.log('aoeuaou');
    	console.log($scope.current_player);
    }

    $scope.calculate_stats = function() {
		console.log('hello');
		angular.forEach($scope.player_data.players, function(value, key) {
			console.log('hello');
			console.log($scope.player_data.players[key]);
			console.log(key + ': ' + value);

			$scope.player_data.players[key].sets_against_gods = 0;
			$scope.player_data.players[key].wins_against_gods = 0;
			$scope.player_data.players[key].losses_against_gods = 0;

			$scope.player_data.players[key].sets_against_demi = 0;
			$scope.player_data.players[key].wins_against_demi = 0;
			$scope.player_data.players[key].losses_against_demi = 0;

			$scope.player_data.players[key].sets_against_all = 0;
			$scope.player_data.players[key].wins_against_all = 0;
			$scope.player_data.players[key].losses_against_all = 0;

			console.log('----------------------------------------------------------------------------------------------------');
			console.log($scope.player_data.players[key]);

			angular.forEach($scope.player_data.players[key].performance, function(v,k) {

				console.log(v);
				

				$scope.player_data.players[key].sets_against_all += v.sets;
				$scope.player_data.players[key].wins_against_all += v.wins;
				$scope.player_data.players[key].losses_against_all += v.losses;

				console.log('dog');
				console.log($scope.player_data.players[key].sets_against_all);
				console.log($scope.player_data.players[key].wins_against_all);
				console.log($scope.player_data.players[key].losses_against_all);
				console.log('cat');
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
				// console.log('rank: '+);


			});


		});

	$scope.current_player = $scope.player_data.players["Armada"];

    };

    $scope.top_ten();
    $scope.get_player_data();
    // $scope.set_current_player();
  });
 
}());