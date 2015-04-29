app.controller('ContactController', ['$scope', '$http', '$state', function($scope, $http, $state){
	$scope.contact = undefined;

	var getContact = function(){
		// in real life this GET would have the id param and would return the contact
		// for simulation I will get all contacts and extract the right one from the array
		$http.get('app/contacts.json')
		.success(function(contacts){
			$scope.contact = _.findWhere(contacts, {"id": parseInt($state.params.id)});
			if($scope.contact != undefined)
				console.log($scope.contact)
			else
				$state.go('home');
		})
		.error(function(data, status, header){
			console.log(data);
		});
	};
	
	$scope.goToHome = function(){
		$state.go('home');
	};
	
	getContact();
}])