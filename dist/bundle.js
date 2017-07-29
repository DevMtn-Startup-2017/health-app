const app = angular.module('healthApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {


    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: './app/routes/home/homeTmpl.html'
        })
        .state('signup', {
            url: '/signup',
            templateUrl: './app/routes/login/signupTmpl.html',
            controller: 'signupCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: './app/routes/login/loginTmpl.html',
            controller: 'signupCtrl'
        })


    $urlRouterProvider.otherwise('/login')


}])
app.controller('mainCtrl', ["$scope", function($scope) {

    $scope.test = "it's twerking!"

}])

app.controller('signupCtrl', ["$scope", "signupSrvc", function($scope, signupSrvc) {
    $scope.getFitLevel = function() {
        $scope.fitLevel = signupSrvc.getFitnessLevel($scope.value);
    }

}])
app.service('signupSrvc', function() {
    this.getFitnessLevel = function(val) {
        if (val === 1) {
            return "Fitness Beginner"
        } else if (val === 2) {
            return "Fitness Novice"
        } else if (val === 3) {
            return "Fitness Intermediate"
        } else if (val == 4) {
            return "Fitness Pro"
        } else {
            return "Fitness Master"
        }
    }
})