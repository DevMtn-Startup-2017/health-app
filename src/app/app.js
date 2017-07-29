const app = angular.module('healthApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {


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


})