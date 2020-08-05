'use strict';

if (typeof Api === "undefined") {
    var Api = {
        contas: {
            erros: {},
            sucessos: {},
        }
    };
}

(function() {


    // MOCK SUCESSOS
    Api.contas.sucessos.LISTAGEM_VAZIA = {
        data: []
    };

    Api.contas.sucessos.LISTAGEM_POR_CODIGO_1 = {
        data: [{
            codigo: 1
        }]
    };

    // MOCK ERROS
    Api.contas.erros.DAR_ERRO_1 = {
        erro: "deu erro 1"
    };

    Api.contas.erros.DAR_ERRO_2 = {
        erro: "deu erro 2"
    };

})();