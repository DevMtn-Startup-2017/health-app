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