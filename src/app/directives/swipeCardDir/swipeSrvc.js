app.service("swipeSrvc", function($window) {
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
})