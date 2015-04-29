var app = angular.module('OpportunitiesApp', ['ngMaterial', 'ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider', '$mdIconProvider', function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider){
	// routes
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'views/home.html',
		controller: 'OpportunitiesController'
	})
	.state('contact', {
		url:'/contact/:id',
		templateUrl: 'views/contact.html',
		controller: 'ContactController'
	});

	$urlRouterProvider.otherwise('/')

	//configuring the salesflare color theme
	$mdThemingProvider.definePalette('salesflareTheme', {
		'50': 'EBF0F1',
		'100': '8BC9E1',
		'200': '33B4E5',
		'300': '01B2F6',
		'400': '006E98',
		'500': '03A9F4',
		'600': '039BE5',
		'700': '0288D1', 
		'800': '0277BD',
		'900': '01579B',
		'A100': '80D8FF',
		'A200': '40C4FF',
		'A400': '00B0FF',
		'A700': '0091EA',
		'contrastDefaultColor': 'light'
	});

	$mdThemingProvider.theme('default')
		.primaryPalette('salesflareTheme', {
			default: '200'
		})
		.accentPalette('blue');
}]);

