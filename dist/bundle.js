const app = angular.module('healthApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './app/routes/home/homeTmpl.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: './app/routes/login/signupTmpl.html',
            controller: 'signupCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: './app/routes/login/loginTmpl.html',
            controller: 'signupCtrl'
        })
        .state('workouts', {
            url: '/workouts',
            templateUrl: './app/routes/workouts/workoutsTmpl.html'
        })
        .state('streaks', {
            url: '/streaks',
            templateUrl: './app/routes/home/streaksTmpl.html',
            controller: 'streaksSrvc'
        })



    $urlRouterProvider.otherwise('/login')


}])
app.controller('mainCtrl', ["$scope", "streaksSrvc", function($scope, streaksSrvc) {

    // gtfo bro
    $scope.streak = streaksSrvc.getStreak();
}])
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
app.controller('signupCtrl', ["$scope", "signupSrvc", function($scope, signupSrvc) {
    $scope.getFitLevel = function() {
        $scope.fitLevel = signupSrvc.getFitnessLevel($scope.value);
    }

}])
app.service('signupSrvc', function() {
    this.getFitnessLevel = function(val) {
        if (val === 1) {
            return "Fitness Beginner"
        } else if (val === 2) {
            return "Fitness Novice"
        } else if (val === 3) {
            return "Fitness Intermediate"
        } else if (val == 4) {
            return "Fitness Pro"
        } else {
            return "Fitness Master"
        }
    }
})
app.controller('streaksCtrl', ["$scope", "streaksSrvc", function ($scope, streaksSrvc) {

	$scope.setStreak = streaksSrvc.setStreak;

	$scope.getStreak = streaksSrvc.getStreak;
}]);
