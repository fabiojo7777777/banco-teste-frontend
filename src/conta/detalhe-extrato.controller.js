(function() {
	var aplicacao = angular.module("detalhe-extrato-controllers", []);

	aplicacao.controller("DetalheExtratoController", DetalheExtratoController);

	DetalheExtratoController.$inject = ['$filter', '$location', 'BackendService', '$rootScope'];
	function DetalheExtratoController($filter, $location, BackendService, $rootScope) {
		var vm = this;
		var currencyFilter = $filter('currency');
		vm.descricaoSemLancamento = "";
		vm.agencia;
		vm.conta;
		vm.listaPeriodo = [{
			id: 1,
			label: "Mês atual",
			value: "2020-07"
		}, {
			id: 2,
			label: "Mês anterior",
			value: "2020-06"
		}];
		vm.periodo = vm.listaPeriodo[0];
		vm.listaLancamento = [];
		vm.onInit = onInit;
		vm.voltar = voltar;
		vm.consultarExtrato = consultarExtrato;
		
		function onInit() {
			var parametros = $location.search();
			vm.agencia = parametros.agencia;
			vm.conta = parametros.conta;
			consultarExtrato();
		}

		function consultarExtrato() {
			console.log(vm.periodo);
			$rootScope.messages = [];
			BackendService.extrato({
				agencia: vm.agencia,
				conta: vm.conta,
				periodo: vm.periodo.value
			})
			.then(function (response) {
				vm.listaLancamento = [{
					data: "01/07/2020",
					historico: "Saldo Anterior",
					saldo: 200.00,
				}, {
					data: "01/07/2020",
					historico: "Transferência de Crédito (TED)",
					documento: 123453,
					valor: 1000.00,
					saldo: 1200.00,
				}, {
					data: "01/07/2020",
					historico: "Transferência de Crédito (TED)",
					documento: 123453,
					valor: -800.00,
					saldo: 400.00,
				}, {
					data: "01/07/2020",
					historico: "Transferência de Crédito (TED)",
					documento: 123453,
					valor: -2200.00,
					saldo: -1800.00,
				}];
				if (vm.listaLancamento.length === 0) {
					vm.descricaoSemLancamento = "Sem lançamentos para o período";
				}
			})
			.catch(function(error){
				vm.descricaoSemLancamento = "Erro ao consultar extrato";
			});
		}

		function voltar() {
			$location.search({});
			$location.path("/conta");
		}
	}
})();
