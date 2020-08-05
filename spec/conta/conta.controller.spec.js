describe("conta.controller", function() {

    'use strict';

    var ctrl;
    var _$scope_;

    beforeEach(module("conta-controllers"));

    beforeEach(module(function($provide, $rootScopeProvider) {
        // mock do backend
        $provide.factory("BackendService", SuperMock.mockarBackend());
        _$scope_ = $rootScopeProvider.$get().$new();
        $provide.factory("$scope", function() { return _$scope_; });
    }));

    beforeEach(inject(function(_$controller_, _$rootScope_) {
        ctrl = _$controller_("ContaController");
    }));

    afterEach(function() {
        SuperMock.verificarNenhumProcessoAssincronoDoAngularPendenteDeExecucao();
    });

    it("*** Testar ContaController ***", inject(function(_$rootScope_) {
        _$rootScope_.messages = [];

        SuperMock.mockarRespostaBackend("contas", undefined, Api.erros.CONTAS_DEU_ERRO_1);

        ctrl.onInit();

        // executa todas as promises, $timeout pendentes para iniciar as verificações deste teste unitário
        SuperMock.executarTodosProcessosAssincronosDoAngular();
        expect(_$scope_.teste).toBeDefined();
        expect(_$scope_.teste).toEqual(1);
    }));

});