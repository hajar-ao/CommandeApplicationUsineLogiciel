'use strict';

angular.module('CommandeApp').factory('CommandeService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'http://localhost:8080/CommandeApplication/public/commande/';

    var factory = {
        fetchAllcommandes: fetchAllcommandes,
        createcommande: createcommande,
        updatecommande:updatecommande,
        deletecommande:deletecommande
    };

    return factory;

    function fetchAllcommandes() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la récupération des commandes');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function createcommande(commande) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, commande)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la création du commande');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updatecommande(commande, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, commande)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la mise à jour du commande');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deletecommande(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la suppression du commande');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
