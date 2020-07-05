describe("conta.controller", function() {

    var ctrl;

    beforeEach(angular.mock.module("conta-controllers"));

    beforeEach(angular.mock.module(function($provide){
		// mock da transação listar contas que executa no onInit do controller
		$provide.factory("BackendService", function(){
			return {
				contas: function(request) {
					return {
						then: function(callbackSucesso) {
							callbackSucesso({
								data: {
									data: []
								}
							});
						}
					};
				}
			};
		});
    }));

    beforeEach(inject(function(_$controller_){
        ctrl = _$controller_("ContaController");
    }));

    it("*** Testar ContaController ***", inject(function(_$rootScope_) {
		
		_$rootScope_.messages = [];
		
		ctrl.onInit();
		
		expect(_$rootScope_.messages).toBeDefined();
		expect(_$rootScope_.messages.length).toEqual(0);

    }));

});
