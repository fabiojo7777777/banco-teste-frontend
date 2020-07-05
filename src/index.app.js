(function() {
	var aplicacao = angular.module("banco-teste-app", [
		"ngRoute", 
		"ui.bootstrap",
		"login-controllers",
		"conta-controllers",
		"detalhe-extrato-controllers",
		"backend-service",
		"banco-teste-alert-diretivas",
		"banco-teste-carregando-diretivas",
		"transferencia-controllers",
		"formatar-data-filter"
	]);
	
	aplicacao.config(['$httpProvider', function($httpProvider) {
		$httpProvider.interceptors.push(HttpInterceptor);
	}]);

	aplicacao.factory(['HttpInterceptor', HttpInterceptor]);

	HttpInterceptor.$inject = ['$q', '$rootScope', '$location', '$timeout'];

	var requisicoesEmAndamento = 0;
	function HttpInterceptor($q, $rootScope, $location, $timeout) {
		return {
			request: function(config) {
				requisicoesEmAndamento++;
				addCarregando();
				// AQUI COLOCA O TOKEN DE AUTENTICAÇÃO CASO HAJA UM
				config.headers['X-TOKEN'] = "X-TOKEN";
				return config;				
			},
			requestError: function(rejection) {
				requisicoesEmAndamento--;
				removeCarregando();
				return $q.reject(rejection);
			},
			response: function(response) {
				requisicoesEmAndamento--;
				removeCarregando();
				return response;
			},
			responseError: function(error) {
				requisicoesEmAndamento--;
				removeCarregando();
				if (!$rootScope.messages) {
					$rootScope.messages = [];
				}
				if (error.status === -1) {
					$rootScope.messages.push({
						type: 'ERROR',
						text: "Não foi possível conectar à url " + error.config.url
					});
				}
				// EM CASO DE ERROS, EXIBIR AUTOMATICAMENTE ERROS NA TELA 
				// SEM PRECISAR EXPLICITAMENTE FAZER ISSO PARA CADA CHAMADA HTTP
				else if (error.status >= 400 && error.status <= 500) {
					// CASO SEJA ERRO DE USUÁRIO NÃO AUTENTICADO, REDIRECIONAR PARA LOGIN
					if (error.status === 401) {
						$location.search({});
						$location.path("/login");
						$timeout(function(){
							exibirErro(error, $rootScope);
						}, 100);
					}
					else {
						exibirErro(error, $rootScope);
					}
				}
				return $q.reject(error);
			}
		};
	}
	
	function addCarregando() {
		try {
			angular.element(document.querySelector("#carregando")).removeClass("ng-hide");
		}
		catch(e) {
		}
	}
	
	function removeCarregando() {
		if (requisicoesEmAndamento <= 0) {
			requisicoesEmAndamento = 0;
			try {
				angular.element(document.querySelector("#carregando")).addClass("ng-hide");
			}
			catch(e) {
			}
		}
	}
	
	function exibirErro(error, $rootScope) {
		if (!$rootScope.messages) {
			$rootScope.messages = [];
		}
		if (error && error.data && angular.isArray(error.data.messages)) {
			for (var i = 0; i < error.data.messages.length; i++) {
				$rootScope.messages.push({
					type: 'ERROR',
					text: error.status + " - " + error.data.messages[i]
				});
			}
		}
		else {
			$rootScope.messages.push({
				type: 'ERROR',
				text: error.status + " - " + error.statusText
			});
		}
	};

})();
