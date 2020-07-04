(function() {

	var aplicacao = angular.module('backend-service', []);
	aplicacao.factory('BackendService', BackendService);		

	BackendService.$inject = ['$http', '$q'];
	function BackendService($http, $q) {
		var backendUrl = "http://localhost:8080";
		return {
			login: function(request) {
				return $http(
					{
						method: 'POST',
						url: backendUrl + '/login',
						data: request
					});
			},
			saldo: function(request) {
				return $http(
					{
						method: 'POST',
						url: backendUrl + '/saldo',
						data: request
					});
			},
			extrato: function(request) {
				return $http(
					{
						method: 'POST',
						url: backendUrl + '/extrato',
						data: request
					});
			},
			transferir: function(request) {
				return $http(
					{
						method: 'POST',
						url: backendUrl + '/transferir',
						data: request
					});
			}
		};
	}

})();
