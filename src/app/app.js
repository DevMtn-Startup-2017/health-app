const app = angular.module('healthApp', ['ui.router', 'ngAnimate', 'ngMaterial'])
    .config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {


        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('deep-orange')

        $mdThemingProvider.enableBrowserColor({
            theme: 'default', // Default is 'default'
            palette: 'accent', // Default is 'primary', any basic material palette and extended palettes are available
            hue: '200' // Default is '800'
            })


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