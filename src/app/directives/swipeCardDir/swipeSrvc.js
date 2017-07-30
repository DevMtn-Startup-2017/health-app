app.service("swipeSrvc", function($window) {
    this.changeView = function() {
        $window.location = "#!/workouts"
    }

    var workouts = [{
            exercise: "Sit-ups",
            baseIntensity: 15,
            unit: 'reps',
            intensity: function() {
                return this.baseIntensity + " " + this.unit
            },
            description: 'A physical exercise designed to strengthen the abdominal muscles, in which a person sits up from a supine position without using the arms for leverage.'
        },
        {
            exercise: "Push Ups",
            baseIntensity: 60,
             unit: 'reps',
            intensity: function() {
                return this.baseIntensity + " " + this.unit
            },
            description: 'An exercise in which a person lies facing the floor and, keeping their back straight, raises their body by pressing down on their hands.',
        },
        {
            exercise: "Go for a Walk",
            baseIntensity: 30,
            unit: 'minutes',
            intensity: function() {
                return this.baseIntensity + " " + this.unit
            },
            description: 'Move at a regular and fairly slow pace by lifting and setting down each foot in turn, never having both feet off the ground at once.',
        },
        {
            exercise: "Run",
            baseIntensity: 20,
            unit: 'minutes',
            intensity: function() {
                return this.baseIntensity + " " + this.unit
            },
            description: 'Move at a speed faster than a walk, never having both or all the feet on the ground at the same time.'
        },
        {
            exercise: "Jumping Jacks",
            baseIntensity: 20,
            unit: 'reps',
            intensity: function() {
                return this.baseIntensity + " " + this.unit
            },
            description: 'A calisthenic jump done from a standing position with legs together and arms at the sides to a position with the legs apart and the arms over the head.'
        },
        {
            exercise: "Pull Ups",
            baseIntensity: 5,
            unit: 'reps',
            intensity: function() {
                return this.baseIntensity + " " + this.unit
            },
            description: "An exercise involving raising oneself with one's arms by pulling up against a horizontal bar fixed above one's head."
        },
        {
            exercise: "Squats",
            baseIntensity: 10,
            unit: 'reps',
            intensity: function() {
                return this.baseIntensity + " " + this.unit
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
})