app.controller('mainCtrl', function($scope, $mdTheming, streaksSrvc, swipeSrvc) {
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
})