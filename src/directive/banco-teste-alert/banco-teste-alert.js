(function() {
	var aplicacao = angular.module("banco-test-diretivas", []);
	aplicacao.directive("bancoTesteAlert", BancoTesteAlert);
	aplicacao.controller("BancoTesteAlertController", BancoTesteAlertController);

	BancoTesteAlert.$inject = [];
	function BancoTesteAlert() {
		return {
			templateUrl: '/directive/banco-teste-alert/banco-teste-alert.tpl.html'
		};
	}
	
	BancoTesteAlertController.$inject = ["$rootScope", "$timeout"];
	function BancoTesteAlertController($rootScope, $timeout) {
		var vm = this;
		vm.alerts = [];
		$rootScope.$watch("messages", function(newMessages, oldMessages) {
			vm.alerts = [];
			if (angular.isArray(newMessages)) {
				for (var i = 0; i < newMessages.length; i++) {
					var type = "warning";
					var text;
					if (newMessages[i] && newMessages[i].type && typeof newMessages[i].type === "string") {
						if (newMessages[i].type.toUpperCase() === "ERROR") {
							type = "danger";
						}
						else {
							type = newMessages[i].type.toLowerCase();
						}
					}
					if (newMessages[i] && newMessages[i].text && typeof newMessages[i].text === "string") {
						text = newMessages[i].text;						
					}
					vm.alerts.push({
						type: type,
						text: text,
						dismiss: function($index) {
							try {
								return newMessages.splice($index, $index + 1);
							}
							catch(e) {
								// ignore
							}
						}
					});
				}
			}
		}, true);
		
	}
	
})();
