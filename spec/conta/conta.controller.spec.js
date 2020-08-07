describe("conta.controller", function() {

    'use strict';

    // variável utilizada para executar o controller a ser testado
    var ctrl;

    // módulo que contém o controller real a ser testado
    beforeEach(module("conta-controllers"));

    // criação de objetos mocks para utilização nos testes
    beforeEach(module(function($provide) {
        // mock do backend
        $provide.factory("BackendService", SuperMock.mockarBackend());
        // mock do $scope do controller a ser testado
        $provide.factory("$scope", SuperMock.mockar$Scope(function() { return ctrl; }));
    }));

    // criação do controller a ser testado
    beforeEach(inject(function(_$controller_, _$scope_) {
        // instanciar o controller
        ctrl = _$controller_("ContaController");
    }));

    // finalização de cada teste
    afterEach(function() {
        SuperMock.verificarNenhumProcessoAssincronoDoAngularPendenteDeExecucao();
    });

    it("*** Testar ContaController ***", inject(function(_$rootScope_, _$scope_) {
        _$rootScope_.messages = [];

        // mockar sucesso na primeira chamada da api
        SuperMock.mockarRespostaBackend("contas", Api.contas_LISTAGEM_VAZIA, undefined);
        // mockar erro na segunda chamada da api
        SuperMock.mockarRespostaBackend("contas", undefined, Api.contas_DAR_ERRO_1);
        // mockar sucesso na chamada da api
        SuperMock.mockarRespostaBackend("contas", { codigo: 1 }, Api.contas_LISTAGEM_POR_CODIGO_1, undefined);
        // mockar erro na chamada da api
        SuperMock.mockarRespostaBackend("contas", { codigo: 2 }, undefined, Api.contas_DAR_ERRO_2);

        // colocar os valores do parent scope aqui para testar comportamento
        _$scope_.$parent.vm = {};
        _$scope_.$parent.vm.aaaa = [{}, {}];
        ctrl.onInit();
        // para acionar um $scope.$on dentro do controller:
        _$scope_.$parent.$broadcast("aaaa", { a: "texto" });

        // executa todas as promises, $timeout pendentes para iniciar as verificações deste teste unitário
        SuperMock.executarTodosProcessosAssincronosDoAngular();

        // testar os valores de variáveis para validar a execução deste teste unitário
        expect(_$scope_.teste).toBeDefined();
        expect(_$scope_.teste).toEqual(1);
        expect(ctrl.lista.length).toEqual(2);
        expect(ctrl.dado$On).toBeDefined();
        expect(ctrl.dado$On).toEqual({ a: "texto" });
    }));

});