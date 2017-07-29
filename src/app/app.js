const app = angular.module('healthApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {


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
        .state('workouts', {
            url: '/workouts',
            templateUrl: './app/routes/workouts/workoutsTmpl.html'
        })
        .state('streaks', {
            url: '/streaks',
            templateUrl: './app/routes/home/streaksTmpl.html',
            controller: 'streaksSrvc'
        })



    $urlRouterProvider.otherwise('/login')


})