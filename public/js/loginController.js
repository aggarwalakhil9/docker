angular.module('smlisuzuweb').controller('loginController', function ($scope, $location, loginService, completeModel) {
	$scope.submitLogin = function(){
		var request = {
			phone	 : $scope.username,
			password : $scope.password
	    }
		// loginService.getLoginToken(request).then(function(response){
			// if(response.data.success && response.status == 200){
			// 	if(response.data.token.length > 0){
			// 		var model = {};
			// 	    model.accessToken = response.data.token;
			// 	    model.loginTime = new Date();
			// 	    model.role = response.data.user.role;
			// 	    completeModel.saveCompleteModel(model);
			// 		if(response.data.user.role == 'admin'){
						$location.path('/admin');
		// 			}
		// 			else{
		// 				$location.path('/events');
		// 			}
					
		// 		}
		// 		else{
		// 			$scope.loginError = true;
		// 		}
		// 	}
		// 	else{
		// 		$scope.loginError = true;
		// 	}
		// });
	}

	$scope.submitForgotPassword = function(){
		//do something
	}
});
