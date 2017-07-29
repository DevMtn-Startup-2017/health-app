app.service('streaksSrvc',function () {
	var streak = 0;
	this.setStreak = function(count) {
		streak = count;
	}

	this.getStreak = function() {
		return streak;
	}
})