var aplicacao = angular.module("banco-teste-app");
aplicacao.config(function ($routeProvider, BackendServiceProvider, $rootScopeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl: "login/login.tpl.html"
    })
    .when("/conta", {
        templateUrl: "conta/conta.tpl.html"
    })
    .when("/detalhe-extrato", {
        templateUrl: "conta/detalhe-extrato.html"
    })
    .when("/transferencia", {
        templateUrl: "conta/transferencia.tpl.html"
    })
	.otherwise("/login");
});

aplicacao.run(function(BackendService, $rootScope, $timeout) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        $rootScope.messages = [];
		if(next.originalPath === "/login") {
			// acesso ok
		}
		else if(next.originalPath === "/conta") {
			verificaAcesso("BK1", BackendService, $rootScope, $timeout);
		}
		else if(next.originalPath === "/detalhe-extrato") {
			verificaAcesso("BK1", BackendService, $rootScope, $timeout)
			.then(function(){
				return verificaAcesso("BK2", BackendService, $rootScope, $timeout);
			});
		}
		else if(next.originalPath === "/transferencia") {
			verificaAcesso("BK1", BackendService, $rootScope, $timeout)
			.then(function(){
				return verificaAcesso("BK2", BackendService, $rootScope, $timeout);
			})
			.then(function(){
				return verificaAcesso("BK3", BackendService, $rootScope, $timeout);
			});
		}
    });
});

function verificaAcesso(acesso, BackendService, $rootScope, $timeout) {
	return BackendService.acessos({})
	.then(function(response){
		if (response) {
			if (response.data) {
				if (angular.isArray(response.data.data)) {
					if (response.data.data.indexOf(acesso) === -1) {
						$timeout(function(){
							$rootScope.messages = [];
							$rootScope.messages.push({
								type: "ERROR",
								text: "Solicite acesso à transação '" + acesso + "' para acessar esta funcionalidade"
							});
						}, 100);
						throw "Solicite acesso à transação '" + acesso + "' para acessar esta funcionalidade";
					}
				}
			}
		}
	});
}