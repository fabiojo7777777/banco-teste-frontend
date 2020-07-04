var aplicacao = angular.module("banco-teste-app");
aplicacao.config(function ($routeProvider) {
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

aplicacao.run(function($rootScope, $location){
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        $rootScope.messages = [];
        if (next.templateUrl === "login/login.tpl.html") {
            return;
        }
        if (!$rootScope.usuarioLogado) {
            $rootScope.messages = [{
                type: "ERROR",
                text: "401 - Usuário não autenticado"
            }];
            $location.path( "/login" );
        }         
    });
});