(function() {

	var aplicacao = angular.module('backend-service', []);
	aplicacao.factory('BackendService', BackendService);		

	BackendService.$inject = ['$http', '$q'];
	function BackendService($http, $q) {
		var backendUrl = "http://localhost:8001";
		return {
			login: function(request) {
				return $http(
					{
						method: 'POST',
						url: backendUrl + '/login',
						data: request
					});
			},
			contas: function(request) {
				return $http(
					{
						method: 'GET',
						url: backendUrl + '/conta/contas',
						params: request
					});
			},
			saldo: function(request) {
				return $http(
					{
						method: 'GET',
						url: backendUrl + '/conta/saldo',
						params: request
					});
			},
			extrato: function(request) {
				return $http(
					{
						method: 'GET',
						url: backendUrl + '/conta/extrato',
						params: request
					});
			},
			transferir: function(request) {
				return $http(
					{
						method: 'POST',
						url: backendUrl + '/conta/transferencia',
						data: request
					});
			}
		};
	}

})();
