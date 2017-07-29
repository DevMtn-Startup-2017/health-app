app.directive('streaksDir', function () {
	return {
		template: `<div ui-sref='streaks' class='streak'>{{streak}}</div>`,
		restrict: 'E'
		// link: function (scope, iElement, iAttrs) {
			
		// }
	};
})