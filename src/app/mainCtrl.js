app.controller('mainCtrl', function($scope, $mdTheming, $interval, streaksSrvc, swipeSrvc) {
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




    $scope.countDownTimer = function(initialCount) {

        console.log('timer started')

        var countDownDate = new Date().getTime() 

        countDownDate += (initialCount * 1000 * 60)

        var x = $interval(function() {

         // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) || 0;
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            $scope.currentTime = hours + ":"
            + minutes + ":" + seconds

            console.log($scope.currentTime)

            // If the count down is finished, write some text 
            if (distance < 0) {
                cancel(x);
            }
            }, 1000)

    }
})