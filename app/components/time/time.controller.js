app.controller('TimeCtrl', ['$scope', '$stateParams', '$state', 'Time', 
	function ($scope, $stateParams, $state, Time) {
	
	if($stateParams.time === 'current'){
		$scope.show = false;
	}else{
		$scope.show = true;
		$scope.timeOptions = Time.options();
		for (var i = 0; i < $scope.timeOptions.length; i++) {
			if($scope.timeOptions[i].value === $stateParams.time){
				$scope.defaultOption = i;
			}
		}
	}
	$scope.onChangeTimeValue = function(){
		$state.go('main.type.id.category.time.extent.filter.details', {time : $scope.timeValue.value});
	};


	
}]);