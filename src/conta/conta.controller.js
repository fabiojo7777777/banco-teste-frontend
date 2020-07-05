(function() {
	var aplicacao = angular.module("conta-controllers", []);

	aplicacao.controller("ContaController", ContaController);

	ContaController.$inject = ["$filter", "$location", "$rootScope", "BackendService"];
	
	function ContaController($filter, $location, $rootScope, BackendService) {
		var vm = this;
		vm.onInit = onInit;
		vm.detalheExtrato = detalheExtrato;
		vm.transferencia = transferencia;
		vm.listaConta = [];
	
		var currencyFilter = $filter('currency');

		function onInit() {
			$rootScope.messages = [];
			BackendService.contas({})
			.then(function(response){
				vm.listaConta = response.data.data;
			});
		}
		
		function detalheExtrato(conta) {
			$location.search("agencia", conta.codigoAgencia);
			$location.search("conta", conta.numeroConta);
			$location.path("/detalhe-extrato");
		}

		function transferencia(conta) {
			$location.search("agenciaOrigem", conta.codigoAgencia);
			$location.search("contaOrigem", conta.numeroConta);
			$location.path("/transferencia");
		}
	}

})();
