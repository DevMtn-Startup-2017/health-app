app.controller('signupCtrl', function($scope, signupSrvc) {

    $scope.value = 3
    $scope.fitLevel = signupSrvc.getFitnessLevel($scope.value)

    $scope.getFitLevel = function() {
        $scope.fitLevel = signupSrvc.getFitnessLevel($scope.value);
        console.log($scope.fitLevel)
    }

    $scope.heightValues = signupSrvc.heightValues()

    $scope.weightValues = signupSrvc.weightValues()

})