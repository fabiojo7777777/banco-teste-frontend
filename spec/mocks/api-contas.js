'use strict';

if (typeof Api === "undefined") {
    var Api = {
        contas: {}
    };
}

(function() {


    // MOCK SUCESSOS
    Api.contas.LISTAGEM_VAZIA = {
        data: []
    };

    Api.contas.LISTAGEM_POR_CODIGO_1 = {
        data: [{
            codigo: 1
        }]
    };

    // MOCK ERROS
    Api.contas.DAR_ERRO_1 = {
        erro: "deu erro 1"
    };

    Api.contas.DAR_ERRO_2 = {
        erro: "deu erro 2"
    };

})();