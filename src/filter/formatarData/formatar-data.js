(function() {

	var aplicacao = angular.module('formatar-data-filter', []);
	aplicacao.filter('formatarData', FormatarDataFilter);		

	function FormatarDataFilter() {
		return function(data) {
			var d = new Date(data);
			var dia = d.getDate();
			var mes = d.getMonth() + 1;
			var ano = d.getFullYear();
			dia = (dia < 10 ? "0" + dia : dia);
			mes = (mes < 10 ? "0" + mes : mes);
			ano = (ano < 10 ? "0" + ano : ano);
			return dia + "/" + mes + "/" + ano;
		};
	}

})();
