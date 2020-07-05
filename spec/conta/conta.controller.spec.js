describe("conta.controller", function() {

    var ctrl;

    beforeEach(angular.mock.module("conta-controllers"));

    beforeEach(angular.mock.module(function($provide){
		// mock da transação listar contas que executa no onInit do controller
		$provide.factory("BackendService", function(){
			return {
				contas: function() {
					return {
						then: function() {
						}
					};
				}
			};
		});
    }));

    beforeEach(inject(function(_$controller_){
        ctrl = _$controller_("ContaController");
    }));

    it("*** Testar ContaController ***", function($rootScope) {
		
		$rootScope.messages = [];
		
		ctrl.onInit();
		
		expect($rootScope.messages).toBeDefined();
		expect($rootScope.messages.length).toEqual(0);
    });

});
