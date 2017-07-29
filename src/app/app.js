const app = angular.module('healthApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {


$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './app/routes/home/homeTmpl.html'
    })
    .state('workouts', {
        url: '/workouts',
        templateUrl: './app/routes/workouts/workoutsTmpl.html'
    .state('streaks', {
        url: '/streaks',
        templateUrl: './app/routes/home/streaksTmpl.html',
        controller: 'streaksSrvc'
    })


$urlRouterProvider.otherwise('/home')


})