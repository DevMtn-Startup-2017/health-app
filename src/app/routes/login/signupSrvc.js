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

    this.weightValues = function() {
        let vals = []
        for (var i = 100; i < 500; i+= 5) {
            vals.push(i)
        }
        return vals
    }

    this.heightValues = function() {
        let vals = []
        for (var i = 52; i < (12*8); i+= 1) {
            vals.push(i)
        }
        return vals
    }

})