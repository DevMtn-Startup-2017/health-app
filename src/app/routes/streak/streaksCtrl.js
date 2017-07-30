app.controller('streaksCtrl', function ($scope, streaksSrvc) {

	$scope.setStreak = streaksSrvc.setStreak;
	$scope.streak = streaksSrvc.getStreak();
});