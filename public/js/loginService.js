smlisuzuevents.service('loginService', ['sharedProperties','$http', function(sharedProperties, $http){
	
	this.getLoginToken = function(requestData){
		return $http({
	            method: 'POST',
	            url: sharedProperties.getUrl()+'/authenticate/login',
	            headers: {
	                'Content-Type': 'application/json'
	            },
	            data: requestData
	        }).success(function (response) {
	            return response;
	        }).error(function (response) {
			    return response;
			});
       };
}])




