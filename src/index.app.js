(function() {
	var aplicacao = angular.module("banco-teste-app", [
		"ngRoute", 
		"ui.bootstrap",
		"login-controllers",
		"conta-controllers",
		"detalhe-extrato-controllers",
		"backend-service",
		"banco-test-diretivas",
		"transferencia-controllers"
	]);
	
	aplicacao.config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push(HttpInterceptor);
	}]);

	aplicacao.factory(['HttpInterceptor', HttpInterceptor]);

	HttpInterceptor.$inject = ['$q', '$rootScope', '$location', '$timeout'];

	function HttpInterceptor($q, $rootScope, $location, $timeout) {
		return {
			request: function(config) {
				config.headers['X-TOKEN'] = "X-TOKEN";
				return config;				
			},
			responseError: function(error) {
				if (!$rootScope.messages) {
					$rootScope.messages = [];
				}
				if (error.status === -1) {
					$rootScope.messages.push({
						type: 'ERROR',
						text: "Não foi possível conectar"
					});
				}
				else if (error.status >= 400 && error.status <= 500) {
					if (error.status === 401) {
						$location.search({});
						$location.path("/login");
						$timeout(function(){
							$rootScope.messages.push({
								type: 'ERROR',
								text: error.status + " - " + error.statusText
							});
						}, 100);
					}
					else {
						$rootScope.messages.push({
							type: 'ERROR',
							text: error.status + " - " + error.statusText
						});
					}
				}
				return $q.reject(error);
			}
		};
	}

})();
