app.controller('mainCtrl', function($scope, streaksSrvc, swipeSrvc) {
    $scope.card = [];
    // gtfo bro
    $scope.streak = streaksSrvc.getStreak();
    $scope.card.changeView = swipeSrvc.changeView;
    $scope.card.getWorkout = function() {
        $scope.card.workout = swipeSrvc.getWorkout();
    }
    $scope.card.getWorkout();

    $scope.changeTime = function(val) {
        $scope.card.workout.base_intensity = swipeSrvc.changeTime($scope.card.workout.base_intensity, val)
    }
})