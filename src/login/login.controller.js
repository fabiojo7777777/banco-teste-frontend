(function() {
	var aplicacao = angular.module("login-controllers", []);

	aplicacao.controller("LoginController", LoginController);

	LoginController.$inject = ["BackendService", "$location", "$rootScope"];
	function LoginController(BackendService, $location, $rootScope) {
		var vm = this;
		vm.onInit = onInit;
		vm.login = login;
		vm.logoff = logoff;
		
		function onInit() {
		}
		
		function login() {
			$rootScope.messages = [];
			BackendService.login({
				usuario: vm.usuario,
				senha: vm.senha,
			})
			.then(function(response){
				$location.path("/conta");
				$rootScope.usuarioLogado = response.data;
			});
		}
		
		function logoff() {
			$rootScope.messages = [];
			BackendService.logoff({})
			.then(function(response){
				$location.path("/login");
				$rootScope.usuarioLogado = undefined;
			});
		}

	}
})();
