//router for all the pages with injection
angular.module('appRoutes', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				templateUrl: 'app/views/pages/home.html',
				controller:'ScheduleController'

			})
			.when('/about', {
				templateUrl: 'app/views/pages/about.html'
			})
			.when('/register', {
				templateUrl: 'app/views/pages/users/register.html',
				controller:'regCtrl',
				controllerAs:'register'
			})
            .when('/login', {
                templateUrl: 'app/views/pages/users/login.html'
            })
            .when('/admin', {
                templateUrl: 'app/views/pages/users/admin.html'
            })
            .when('/resetpassword', {
                templateUrl: 'app/views/pages/users/reset.html',
                controller: 'passwordCtrl',
                controllerAs:'password'
            })
            .when('/reset/:token', {
                templateUrl: 'app/views/pages/users/newpass.html',
                controller: 'resetController',
                controllerAs:'reset'
            })
            .when('/profile', {
                templateUrl: 'app/views/pages/users/profile.html'
            })
            .when('/usermanage', {
                templateUrl: 'app/views/pages/users/usermanage.html',
				controller: 'adminCtrl',
				controllerAs:'admin'
            })
            .when('/schedule', {
                templateUrl: 'app/views/pages/users/schedule.html',
				controller:'listCtrl',
				controllerAs:'listall',
            })
			.when('/logout',{
				templateUrl: 'app/views/pages/users/logout.html'
			})
			.otherwise({redirectTo: '/'});
		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	});
