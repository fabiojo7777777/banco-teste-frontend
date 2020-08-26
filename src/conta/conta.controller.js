(function() {
    var aplicacao = angular.module("conta-controllers", []);

    aplicacao.controller("ContaController", ContaController);

    ContaController.$inject = ["$filter", "$location", "$rootScope", "BackendService", "$scope", "$timeout"];

    function ContaController($filter, $location, $rootScope, BackendService, $scope, $timeout) {
        var vm = this;
        vm.onInit = onInit;
        vm.detalheExtrato = detalheExtrato;
        vm.transferencia = transferencia;
        vm.listaConta = [];

        var currencyFilter = $filter('currency');

        function onInit() {
			try {
				$scope.$on("aaaa", function(evt, dado) {
					vm.dado$On = dado;
				});
				var vm1 = $scope.$parent.vm;
				vm.lista = vm1.aaaa;
			}
			catch (e) {
				//ignore
			}
            $rootScope.messages = [];
            BackendService.contas({})
                .then(function(response) {
                    vm.listaConta = response.data.data;
                })
                .catch(function(erro) {});
            $timeout(function() {
                console.log("executar assincrono");
                $scope.teste = 1;
            }, 10000);
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