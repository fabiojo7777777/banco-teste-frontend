(function() {
	var aplicacao = angular.module("conta-controllers", []);

	aplicacao.controller("ContaController", ContaController);

	ContaController.$inject = ["$filter", "$location", "$rootScope", "BackendService"];
	
	function ContaController($filter, $location, $rootScope, BackendService) {
		var vm = this;
		vm.onInit = onInit;
		vm.detalheExtrato = detalheExtrato;
		vm.transferencia = transferencia;
		vm.listaConta = [
			{
				agencia: 1,
				conta: 1,
				fotoCartao: "../images/Ourocard-Elo-Mais.jpg",
				saldo: -10000
			}, 
			{
				agencia: 2,
				conta: 2,
				fotoCartao: "../images/Ourocard-Internacional-Visa.jpg",
				saldo: -9000
			}, 
			{
				agencia: 3,
				conta: 3,
				fotoCartao: "../images/Ourocard-Visa-Elo.jpg",
				saldo: -8000
			}, 
			{
				agencia: 4,
				conta: 4,
				fotoCartao: "../images/Ourocard-Visa-Facil.jpg",
				saldo: -7000
			}, 
			{
				agencia: 5,
				conta: 5,
				fotoCartao: "../images/Ourocard-Visa-Gold.jpg",
				saldo: -6000
			}, 
			{
				agencia: 6,
				conta: 6,
				fotoCartao: "../images/Ourocard-Visa-Platinum.jpg",
				saldo: -5000
			}, 
			{
				agencia: 7,
				conta: 7,
				fotoCartao: "../images/OurocardEloGrafite.png",
				saldo: 100000
			}
		];

		var currencyFilter = $filter('currency');

		function onInit() {
			$rootScope.messages = [];
			BackendService.saldo({})
			.then(function(response){
				vm.listaConta = [
					{
						agencia: 1,
						conta: 1,
						fotoCartao: "../images/Ourocard-Elo-Mais.jpg",
						saldo: -10000
					}, 
					{
						agencia: 2,
						conta: 2,
						fotoCartao: "../images/Ourocard-Internacional-Visa.jpg",
						saldo: -9000
					}, 
					{
						agencia: 3,
						conta: 3,
						fotoCartao: "../images/Ourocard-Visa-Elo.jpg",
						saldo: -8000
					}, 
					{
						agencia: 4,
						conta: 4,
						fotoCartao: "../images/Ourocard-Visa-Facil.jpg",
						saldo: -7000
					}, 
					{
						agencia: 5,
						conta: 5,
						fotoCartao: "../images/Ourocard-Visa-Gold.jpg",
						saldo: -6000
					}, 
					{
						agencia: 6,
						conta: 6,
						fotoCartao: "../images/Ourocard-Visa-Platinum.jpg",
						saldo: -5000
					}, 
					{
						agencia: 7,
						conta: 7,
						fotoCartao: "../images/OurocardEloGrafite.png",
						saldo: 100000
					}
				];
			});
		}
		
		function detalheExtrato(conta) {
			$location.search("agencia", conta.agencia);
			$location.search("conta", conta.conta);
			$location.path("/detalhe-extrato");
		}

		function transferencia(conta) {
			$location.search("agenciaOrigem", conta.agencia);
			$location.search("contaOrigem", conta.conta);
			$location.path("/transferencia");
		}
	}
})();
