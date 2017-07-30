const app = angular.module('healthApp', ['ui.router', 'ngAnimate', 'ngMaterial'])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
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
app.controller('mainCtrl', ["$scope", "streaksSrvc", "swipeSrvc", function($scope, streaksSrvc, swipeSrvc) {
    $scope.card = [];
    // gtfo bro
    $scope.streak = streaksSrvc.getStreak();
    $scope.card.changeView = swipeSrvc.changeView;
    $scope.card.getWorkout = function() {
        $scope.card.workout = swipeSrvc.getWorkout();
    }
    $scope.card.getWorkout();
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
        link: function(scope, element, attrs) {

        },
        templateUrl: './app/directives/swipeCardDir/swipeCardDirTmpl.html'
    }
})
app.service("swipeSrvc", ["$window", function($window) {
    this.changeView = function() {
        console.log('in swipeSrvc')
        $window.location = "#!/workouts"
    }

    var workouts = [{
            exercise: "Sit-ups",
            intensity: 15,
        },
        {
            exercise: "Push Ups",
            intensity: 60,
        }
    ]

    this.getWorkout = function() {
        return workouts[0];
    }
}])
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
