describe("conta.controller", function() {

    beforeEach(angular.mocks.module("conta-controllers"));

    beforeEach(angular.mocks.module(function($provide){
    }));

    beforeEach(inject(function(_$controller_){
        _$controller_("ContaController");
    }));

	it("*** Testar ContaController ***", function() {
		var ctrl = mockHelper.criarController('testeControllers', 'testeController');
		ctrl.somar();
		//expect(ctrl.valor1).toEqual(1);
		//expect(ctrl.valor2).toEqual(2);
		//expect(ctrl.resultado).toEqual(4);
	});

});