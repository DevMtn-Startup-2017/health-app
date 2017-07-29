const app = angular.module('healthApp', ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {


$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './app/routes/home/homeTmpl.html'
    })


$urlRouterProvider.otherwise('/home')


}])
app.controller('mainCtrl', ["$scope", function($scope) {

    $scope.test = "it's twerking!"

}])
