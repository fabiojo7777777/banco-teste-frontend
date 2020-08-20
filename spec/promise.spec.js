describe("teste", function() {

    'use strict';

    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(inject(function($verifyNoPendingTasks) {
        jasmine.clock().uninstall();
        $verifyNoPendingTasks();
    }));

    it("*** Testar promise ***", inject(function($q, $rootScope, $timeout, $flushPendingTasks, $verifyNoPendingTasks) {
        var time1 = Math.floor(Math.random() * 1000);
        var time2 = Math.floor(Math.random() * 1000);
        time2 = time1;
        var t = 1;

        function executar1() {
            var deferred1 = $q.defer();
            deferred1.resolve("teste1");
            return deferred1.promise;
        }

        function executar2() {
            var deferred2 = $q.defer();
            $timeout(function() {
                deferred2.resolve("teste2");
            }, 0);
            return deferred2.promise;
        }

        executar1()
            .then(function(response) {
                console.log("then da promise1 " + response);
                return executar2();
            })
            .then(function(response) {
                $timeout(function() {
                    //t = 2;
                }, 0);
                console.log("then da promise2 " + response);
            })
            .catch(function(error) {
                console.log("error da promise " + error);
            });


        new Promise(function(resolve, reject) {
                console.log(" teste ");
                resolve("teste");
            })
            .then(function(response) {
                console.log("teste => " + response);
                $timeout(function() {
                    t = 2;
                }, 2000);
            });
        /*if (time1 < time2) {
            jasmine.clock().tick(time1);
            jasmine.clock().tick(time2);
        } else {
            jasmine.clock().tick(time2);
            jasmine.clock().tick(time1);
        }*/
        //expect
        //expectAsync(promise1).toBeResolved();
        //expectAsync(promise2).toBeResolved();
        SuperMock.executarTodosProcessosAssincronosDoAngular();
        expect(t).toEqual(2);
    }));


});