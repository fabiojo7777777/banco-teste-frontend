describe("conta.controller", function() {

    'use strict';

    var ctrl;

    beforeEach(module("conta-controllers"));

    beforeEach(module(function($provide, $rootScopeProvider) {
        // mock do backend
        $provide.factory("BackendService", SuperMock.mockarBackend());
		// mock do $scope
        $provide.factory("$scope", function() { return $rootScopeProvider.$get().$new(); });
    }));

    beforeEach(inject(function(_$controller_) {
        ctrl = _$controller_("ContaController");
    }));

    afterEach(function() {
        SuperMock.verificarNenhumProcessoAssincronoDoAngularPendenteDeExecucao();
    });

    it("*** Testar ContaController ***", inject(function(_$rootScope_, _$scope_) {
        _$rootScope_.messages = [];

        SuperMock.mockarRespostaBackend("contas", undefined, Api.erros.CONTAS_DEU_ERRO_1);

        ctrl.onInit();

        // executa todas as promises, $timeout pendentes para iniciar as verificações deste teste unitário
        SuperMock.executarTodosProcessosAssincronosDoAngular();
        expect(_$scope_.teste).toBeDefined();
        expect(_$scope_.teste).toEqual(1);
    }));

});