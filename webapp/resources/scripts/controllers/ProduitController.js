'use strict';

angular.module('CommandeApp').controller('ProduitController', ['$scope', 'ProduitService','$http', function($scope, ProduitService,$http) {
    var self = this;
    self.produit={id:null,nomProduit:'',prixUnitaire:''};
    self.produits=[];

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;


    fetchAllproduits();

    function fetchAllproduits(){
        ProduitService.fetchAllproduits()
            .then(
            function(d) {
                self.produits = d;
            },
            function(errResponse){
                console.error('Error while fetching produits');
            }
        );
    }

    function createproduit(produit){
        ProduitService.createproduit(produit)
            .then(
            fetchAllproduits,
            function(errResponse){
                console.error('Error while creating produit');
            }
        );
    }

    function updateproduit(produit, id){
        ProduitService.updateproduit(produit, id)
            .then(
            fetchAllproduits,
            function(errResponse){
                console.error('Error while updating produit');
            }
        );
        
    }

    function deleteproduit(id){
        ProduitService.deleteproduit(id)
            .then(
            fetchAllproduits,
            function(errResponse){
                console.error('Error while deleting produit');
            }
        );
    }

    function submit() {
        if(self.produit.id===null){
            console.log('Saving New produit', self.produit);
            createproduit(self.produit);
        }else{
            updateproduit(self.produit, self.produit.id);
            console.log('produit updated with id ', self.produit.id);
        }
        reset();
        $scope.hideSave = false;
    }

    function edit(id){
        console.log('id to be edited', id);
        $http.get('http://localhost:8080/CommandeApplication/public/produit/'+id)
        .success(function(response) {
            console.log(response);
            self.produit = response;
        });
       
     $scope.hideSave = true;
       
    }


    function remove(id){
        console.log('id to be deleted', id);
        if(self.produit.id === id) {//clean form if the produit to be deleted is shown there.
            reset();
        }
        deleteproduit(id);
    }


    function reset(){
        self.produit={id:null,nomProduit: "",prixUnitaire: ""};
        $scope.myForm.$setPristine(); //reset Form
    }

}]);