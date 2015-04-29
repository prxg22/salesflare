app.controller('OpportunitiesController', ['$scope', '$http', '$state', function($scope, $http, $state){
	$scope.opportunities = [];
	$scope.groups = groups = [
		{name: 'Action Needed', collapse: false, group: 'action'},
		{name: 'Awaiting Email', collapse: false, group: 'awaiting'},
		{name: 'Follow-up Scheduled', collapse: false, group: 'followUp'}
	];

	var getOpportunities = function(){
		$http.get('app/Opportunities.json')
		.success(function(data){
			$scope.opportunities = data;
		})
		.error(function(data, status, header){
			console.log(data);
		});
	};

	$scope.toggleMenuClick = function($event){
		console.log(angular.element($event.target));
	};

	$scope.goToContact = function(contact){
		$state.go('contact', {id: contact.id});
	};
	

	getOpportunities();
}])