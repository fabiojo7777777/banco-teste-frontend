describe("conta.controller", function() {

    var ctrl;

    beforeEach(angular.mocks.module("conta-controllers"));

    beforeEach(angular.mocks.module(function($provide){
    }));

    beforeEach(inject(function(_$controller_){
        ctrl = _$controller_("ContaController");
    }));

    it("*** Testar ContaController ***", function($rootScope) {
	ctrl.onInit();
	expect($rootScope.messages.length).toEqual(0);
    });

});
