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
			value: new Date().getFullYear() + "-" + ((new Date().getMonth() + 1) < 10 ? ("0" + (new Date().getMonth() + 1)) : (new Date().getMonth() + 1))
		}, {
			id: 2,
			label: "Mês anterior",
			value: new Date().getFullYear() + "-" + ((new Date().getMonth()) < 10 ? ("0" + new Date().getMonth()) : (new Date().getMonth()))
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
			$rootScope.messages = [];
			BackendService.extrato({
				codigoAgencia: vm.agencia,
				numeroConta: vm.conta,
				dataMovimento: vm.periodo.value
			})
			.then(function (response) {
				vm.listaLancamento = response.data.data;
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
