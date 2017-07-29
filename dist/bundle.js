const app = angular.module('healthApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {


$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './app/routes/home/homeTmpl.html'
    })
    .state('workouts', {
        url: '/workouts',
        templateUrl: './app/routes/workouts/workoutsTmpl.html'
    })


$urlRouterProvider.otherwise('/home')


}])
app.controller('mainCtrl', ["$scope", function($scope) {

    $scope.test = "it's twerking!"

}])

app.directive('swipeCard', function() {
    return {
        restrict: 'E',
        scope: {

        },
        link: function(scope, element, attrs) {

        },
        templateUrl: './app/directives/swipeCardDir/swipeCardDirTmpl.html'
    }
})
