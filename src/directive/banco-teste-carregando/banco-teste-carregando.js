(function() {
	var aplicacao = angular.module("banco-teste-carregando-diretivas", []);
	aplicacao.directive("bancoTesteCarregando", BancoTesteCarregando);

	BancoTesteCarregando.$inject = [];
	function BancoTesteCarregando() {
		return {
			templateUrl: '/directive/banco-teste-carregando/banco-teste-carregando.tpl.html'
		};
	}
	
})();
