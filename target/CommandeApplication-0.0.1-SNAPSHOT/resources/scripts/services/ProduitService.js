'use strict';

angular.module('CommandeApp').factory('ProduitService', ['$http', '$q', function($http, $q){

    var REST_SERVICE_URI = 'http://localhost:8080/CommandeApplication/public/produit/';

    var factory = {
        fetchAllproduits: fetchAllproduits,
        createproduit: createproduit,
        updateproduit:updateproduit,
        deleteproduit:deleteproduit
    };

    return factory;

    function fetchAllproduits() {
        var deferred = $q.defer();
        $http.get(REST_SERVICE_URI)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la récupération des produits');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function createproduit(produit) {
        var deferred = $q.defer();
        $http.post(REST_SERVICE_URI, produit)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la création du produit');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }


    function updateproduit(produit, id) {
        var deferred = $q.defer();
        $http.put(REST_SERVICE_URI+id, produit)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la mise à jour du produit');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

    function deleteproduit(id) {
        var deferred = $q.defer();
        $http.delete(REST_SERVICE_URI+id)
            .then(
            function (response) {
                deferred.resolve(response.data);
            },
            function(errResponse){
                console.error('Erreur lors de la suppression du produit');
                deferred.reject(errResponse);
            }
        );
        return deferred.promise;
    }

}]);
