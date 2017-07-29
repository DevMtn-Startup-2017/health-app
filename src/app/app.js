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


    $urlRouterProvider.otherwise('/login')


})