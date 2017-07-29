const app = angular.module('healthApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {


$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './app/routes/home/homeTmpl.html'
    })
    .state('workouts', {
        url: '/workouts',
        templateUrl: './app/routes/workouts/workoutsTmpl.html'
    .state('streaks', {
        url: '/streaks',
        templateUrl: './app/routes/home/streaksTmpl.html',
        controller: 'streaksSrvc'
    })


$urlRouterProvider.otherwise('/home')


}])
app.controller('mainCtrl', ["$scope", "streaksSrvc", function($scope, streaksSrvc) {

    // gtfo bro
    $scope.streak = streaksSrvc.getStreak();
}])

app.directive('swipeCard', function() {
    return {
        restrict: 'E',
        scope: {

        },
        link: function(scope, element, attrs) {

        },
        templateUrl: './app/directives/swipeCardDir/swipeCardDirTmpl.html'
    }
})
app.directive('streaksDir', function () {
	return {
		template: `<div class='streak'>{{streak}}</div>`,
		restrict: 'E'
		// link: function (scope, iElement, iAttrs) {
			
		// }
	};
})

app.service('streaksSrvc',function () {
	var streak = 0;
	this.setStreak = function(count) {
		streak = count;
	}

	this.getStreak = function() {
		return streak;
	}
})
app.controller('streaksCtrl', ["$scope", "streaksSrvc", function ($scope, streaksSrvc) {

	$scope.setStreak = streaksSrvc.setStreak;

	$scope.getStreak = streaksSrvc.getStreak;
}]);
