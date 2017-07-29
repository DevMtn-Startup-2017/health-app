app.controller('mainCtrl', function($scope, streaksSrvc) {

    // gtfo bro
    $scope.streak = streaksSrvc.getStreak();
})