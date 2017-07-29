app.directive('streaksDir', function () {
	return {
		template: `<div class='streak'>{{streak}}</div>`,
		restrict: 'E'
		// link: function (scope, iElement, iAttrs) {
			
		// }
	};
})