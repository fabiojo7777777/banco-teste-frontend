(function() {
	var aplicacao = angular.module("transferencia-controllers", []);

	aplicacao.controller("TransferenciaController", TransferenciaController);

	TransferenciaController.$inject = ['BackendService', '$filter', '$location', '$rootScope', '$timeout'];
	function TransferenciaController(BackendService, $filter, $location, $rootScope, $timeout) {
		var vm = this;
		var currencyFilter = $filter('currency');

		vm.agenciaOrigem;
		vm.contaOrigem;
		vm.agenciaDestino;
		vm.contaDestino;
		vm.valor;
		vm.senha;
		
		vm.onInit = onInit;
		vm.transferir = transferir;
		vm.voltar = voltar;
		vm.saldo = undefined;
		
		function onInit() {
			var parametros = $location.search();
			vm.agenciaOrigem =parametros.agenciaOrigem;
			vm.contaOrigem = parametros.contaOrigem;
			BackendService.saldo({
				agencia: vm.agenciaOrigem,
				conta: vm.contaOrigem
			})
			.then(function(response){
				vm.saldo = response.data.saldo;
			})
			.catch(function(error){
				vm.saldo = undefined;
			});	
		}

		function transferir() {
			$rootScope.messages = [];
			BackendService.transferir({
				agenciaOrigem: vm.agenciaOrigem,
				contaOrigem: vm.contaOrigem,
				agenciaDestino: vm.agenciaDestino,
				contaDestino: vm.contaDestino,
				senha: vm.senha
			}).then(function(response){
				voltar();
				$timeout(function() {
					$rootScope.messages.push({
						type: "SUCCESS",
						text: "Transferência completada com sucesso!"
					});
				}, 100);
			});
		}

		function voltar() {
			$location.search({});
			$location.path("/conta");
		}		
}
})();
