const app = angular.module('healthApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'ngTouch'])
    .config(["$stateProvider", "$urlRouterProvider", "$mdThemingProvider", function($stateProvider, $urlRouterProvider, $mdThemingProvider) {


        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('deep-orange')

        $mdThemingProvider.enableBrowserColor({
            theme: 'default', // Default is 'default'
            palette: 'accent', // Default is 'primary', any basic material palette and extended palettes are available
            hue: '200' // Default is '800'
            })


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
                templateUrl: './app/routes/workouts/workoutsTmpl.html',
                // controller: 'workoutsCtrl'
            })
            .state('streaks', {
                url: '/streaks',
                templateUrl: './app/routes/streak/streaksTmpl.html',
                controller: 'streaksCtrl'
            })

        $urlRouterProvider.otherwise('/login')


    }])
app.controller('mainCtrl', ["$scope", "$mdTheming", "streaksSrvc", "swipeSrvc", function($scope, $mdTheming, streaksSrvc, swipeSrvc) {
    $scope.card = []
    // gtfo bro
    $scope.streak = streaksSrvc.getStreak();
    $scope.card.changeView = swipeSrvc.changeView;
    $scope.card.getWorkout = function() {
        $scope.card.workout = swipeSrvc.getWorkout();
    }
    $scope.card.getWorkout();

    $scope.changeTime = function(val) {
        if (val < 0 && $scope.card.workout.base_intensity > 0) {
            $scope.card.workout.base_intensity = swipeSrvc.changeTime($scope.card.workout.base_intensity, val)
        }

        if (val > 0) {
            $scope.card.workout.base_intensity = swipeSrvc.changeTime($scope.card.workout.base_intensity, val)
        }

    }


    var removeFunction = $mdTheming.setBrowserColor({
      theme: 'default', 
      palette: 'accent', 
      hue: '200' 
    })

    $scope.$on('$destroy', function () {
      removeFunction() 
    })
}])
app.directive('backhomeDir', function () {

	return {
		template: `<div ui-sref='home' class='back-home'><i class="fa fa-times fa-2x" aria-hidden="true"></i></div>`,
		restrict: 'E'
		// link: function (scope, iElement, iAttrs) {
			
		// }
	};
})
app.directive('streaksDir', function () {
	return {
		template: `<div ui-sref='streaks' class='streak'>{{streak}}</div>`,
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
        $window.location = "#!/workouts"
    }

    var workouts = [{
            exercise: "Sit-ups",
            base_intensity: 15,
            intensity: function() {
                return this.base_intensity + " reps"
            },
            description: 'A physical exercise designed to strengthen the abdominal muscles, in which a person sits up from a supine position without using the arms for leverage.'
        },
        {
            exercise: "Push Ups",
            base_intensity: 60,
            intensity: function() {
                return this.base_intensity + " reps"
            },
            description: 'An exercise in which a person lies facing the floor and, keeping their back straight, raises their body by pressing down on their hands.',
        },
        {
            exercise: "Go for a Walk",
            base_intensity: 30,
            intensity: function() {
                return this.base_intensity + " minutes"
            },
            description: 'Move at a regular and fairly slow pace by lifting and setting down each foot in turn, never having both feet off the ground at once.',
        },
        {
            exercise: "Lift Weights",
            base_intensity: 10,
            intensity: function() {
                return this.base_intensity + " minutes"
            },
            description: 'The sport or activity of lifting barbells or other heavy weights.',
        },
        {
            exercise: "Run",
            base_intensity: 20,
            intensity: function() {
                return this.base_intensity + " minutes"
            },
            description: 'Move at a speed faster than a walk, never having both or all the feet on the ground at the same time.'
        },
        {
            exercise: "Jumping Jacks",
            base_intensity: 20,
            intensity: function() {
                return this.base_intensity + " reps"
            },
            description: 'A calisthenic jump done from a standing position with legs together and arms at the sides to a position with the legs apart and the arms over the head.'
        },
        {
            exercise: "Pull Ups",
            base_intensity: 5,
            intensity: function() {
                return this.base_intensity + " reps"
            },
            description: "An exercise involving raising oneself with one's arms by pulling up against a horizontal bar fixed above one's head."
        },
        {
            exercise: "Squats",
            base_intensity: 10,
            intensity: function() {
                return this.base_intensity + " reps"
            },
            description: "Crouch or sit with one's knees bent and one's heels close to or touching one's buttocks or the back of one's thighs."
        },

    ]

    this.getWorkout = function() {
        var workout = workouts[Math.floor(Math.random() * workouts.length)];
        this.currentExercise = workout;
        return workout;
    }

    this.changeTime = function(intensity, val) {
        return intensity += val;
    }
}])
app.controller('signupCtrl', ["$scope", "signupSrvc", function($scope, signupSrvc) {

    $scope.value = 3
    $scope.fitLevel = signupSrvc.getFitnessLevel($scope.value)

    $scope.getFitLevel = function() {
        $scope.fitLevel = signupSrvc.getFitnessLevel($scope.value);
        console.log($scope.fitLevel)
    }

    $scope.heightValues = signupSrvc.heightValues()

    $scope.weightValues = signupSrvc.weightValues()

}])
app.service('signupSrvc', function() {
    this.getFitnessLevel = function(val) {

        var levels = {
            1: "Beginner",
            2: "Novice",
            3: "Intermediate",
            4: "Pro",
            5: "Master",
        }
        return levels[val] || levels[3]

    }


    this.heightValues = function() {
        let vals = []
        for (var i = 100; i < 500; i+= 5) {
            vals.push(i)
        }
        return vals
    }

    this.weightValues = function() {
        let vals = []
        for (var i = 48; i < (12*8); i+= 1) {
            vals.push(i)
        }
        return vals
    }

})
app.controller('streaksCtrl', ["$scope", "streaksSrvc", function ($scope, streaksSrvc) {

	$scope.setStreak = streaksSrvc.setStreak;
	$scope.streak = streaksSrvc.getStreak();

	
}]);
