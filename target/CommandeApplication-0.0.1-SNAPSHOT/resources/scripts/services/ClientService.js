'use strict';

angular.module('CommandeApp').factory('ClientService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'http://localhost:8080/CommandeApplication/public/client/';

    var factory = {
        fetchAllclients: fetchAllclients,
        createclient: createclient,
        updateclient:updateclient,
        deleteclient:deleteclient
    };

    return factory;

    function fetchAllclients() {
        var deferred = $q.defer();
         $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
                            },
            function(errResponse){
                console.error('Erreur lors de la récupération des clients');
                deferred.reject(errResponse);
            }
        );
        
        return deferred.promise;
        
    }
   
    function createclient(client) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, client)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la création du client');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateclient(client, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, client)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la mise à jour du client');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteclient(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la suppression du client');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
