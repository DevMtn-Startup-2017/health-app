const app = angular.module('healthApp', ['ui.router', 'ngAnimate', 'ngMaterial', 'ngTouch'])
    .config(function($stateProvider, $urlRouterProvider) {
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
                templateUrl: './app/routes/workouts/workoutsTmpl.html',
                // controller: 'workoutsCtrl'
            })
            .state('streaks', {
                url: '/streaks',
                templateUrl: './app/routes/streak/streaksTmpl.html',
                controller: 'streaksCtrl'
            })

        $urlRouterProvider.otherwise('/login')


    })