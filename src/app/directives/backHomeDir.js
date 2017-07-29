app.directive('backhomeDir', function () {

	return {
		template: `<div ui-sref='home' class='back-home'><i class="fa fa-arrow-left fa-4x" aria-hidden="true"></i></div>`,
		restrict: 'E'
		// link: function (scope, iElement, iAttrs) {
			
		// }
	};
})