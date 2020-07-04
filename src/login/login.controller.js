(function() {
	var aplicacao = angular.module("login-controllers", []);

	aplicacao.controller("LoginController", LoginController);

	LoginController.$inject = ["BackendService", "$location", "$rootScope"];
	function LoginController(BackendService, $location, $rootScope) {
		var vm = this;
		vm.onInit = onInit;
		vm.login = login;
		
		function onInit() {
		}
		
		function login() {
			$rootScope.usuarioLogado = {};
			$rootScope.messages = [];
			BackendService.login({
				usuario: vm.usuario,
				senha: vm.senha,
			})
			.then(function(response){
				$location.path("/conta");
				$rootScope.loggedUser = response.data;
			});
		}
	}
})();
