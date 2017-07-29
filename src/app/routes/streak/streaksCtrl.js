app.controller('streaksCtrl', function ($scope, streaksSrvc) {

	$scope.setStreak = streaksSrvc.setStreak;

	$scope.getStreak = streaksSrvc.getStreak;
});