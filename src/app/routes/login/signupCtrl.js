app.controller('signupCtrl', function($scope, signupSrvc) {
    $scope.getFitLevel = function() {
        $scope.fitLevel = signupSrvc.getFitnessLevel($scope.value);
    }

})