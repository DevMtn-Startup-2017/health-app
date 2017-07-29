const app = angular.module('healthApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {


$stateProvider
    .state('home', {
        url: '/home',
        templateUrl: './app/routes/home/homeTmpl.html'
    })


$urlRouterProvider.otherwise('/home')


})