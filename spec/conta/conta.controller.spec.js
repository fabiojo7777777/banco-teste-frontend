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

        // mockar sucesso independendo do request de entrada
        SuperMock.mockarRespostaBackend("contas", Api.contas.sucessos.LISTAGEM_VAZIA, undefined);
        // mockar erro independendo do request de entrada
        SuperMock.mockarRespostaBackend("contas", undefined, Api.contas.erros.DAR_ERRO_1);
        // mockar sucesso baseado no request de entrada
        SuperMock.mockarRespostaBackend("contas", { codigo: 1 }, Api.contas.sucessos.LISTAGEM_POR_CODIGO_1, undefined);
        // mockar erro baseado no request de entrada
        SuperMock.mockarRespostaBackend("contas", { codigo: 2 }, undefined, Api.contas.erros.DAR_ERRO_2);

        ctrl.onInit();

        // executa todas as promises, $timeout pendentes para iniciar as verificações deste teste unitário
        SuperMock.executarTodosProcessosAssincronosDoAngular();
        expect(_$scope_.teste).toBeDefined();
        expect(_$scope_.teste).toEqual(1);
    }));

});