'use strict';

angular.module('CommandeApp').controller('CommandeController', ['$scope','CommandeService','$controller',function($scope, CommandeService,$controller) {
	
	var self = this;
    self.commande={id:null,dateComm:'',dateLiv:'',adresse:'',statutCommande:''};
    self.commandes=[];
    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
    
  

    fetchAllcommandes();

    function fetchAllcommandes(){
        CommandeService.fetchAllcommandes()
            .then(
            function(d) {
                self.commandes = d;
            },
            function(errResponse){
                console.error('Error while fetching commandes');
            }
        );
    }

    function createcommande(commande){
        CommandeService.createcommande(commande)
            .then(
            fetchAllcommandes,
            function(errResponse){
                console.error('Error while creating commande');
            }
        );
    }

    function updatecommande(commande, id){
        CommandeService.updatecommande(commande, id)
            .then(
            fetchAllcommandes,
            function(errResponse){
                console.error('Error while updating commande');
            }
        );
    }

    function deletecommande(id){
        CommandeService.deletecommande(id)
            .then(
            fetchAllcommandes,
            function(errResponse){
                console.error('Error while deleting commande');
            }
        );
    }

    function submit() {
        if(self.commande.id===null){
            console.log('Saving New commande', self.commande);
            createcommande(self.commande);
        }else{
            updatecommande(self.commande, self.commande.id);
            console.log('commande updated with id ', self.commande.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.commandes.length; i++){
            if(self.commandes[i].id === id) {
                self.commande = angular.copy(self.commandes[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.commande.id === id) {//clean form if the commande to be deleted is shown there.
            reset();
        }
        deletecommande(id);
    }


    function reset(){
    	self.commande={id:null,dateComm:'',dateLiv:'',adresse:'',statutCommande:''};
        $scope.myForm.$setPristine(); //reset Form
    }

}]);