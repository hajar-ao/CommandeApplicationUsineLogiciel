'use strict';

angular.module('CommandeApp').controller('ClientController', ['$scope', 'ClientService', function($scope, ClientService) {
    var self = this;
    self.client={id:null,nomComplet:'',email:'',tel:'',sexe:''};
    self.clients=[];

    self.submit = submit;
    self.edit = edit;
    self.remove = remove;
    self.reset = reset;
    fetchAllclients();

    function fetchAllclients(){
        ClientService.fetchAllclients()
            .then(
            function(d) {
                self.clients = d;
            },
            function(errResponse){
                console.error('Error while fetching clients');
            }
        );
    }

    function createclient(client){
        ClientService.createclient(client)
            .then(
            fetchAllclients,
            function(errResponse){
                console.error('Error while creating client');
            }
        );
    }

    function updateclient(client, id){
        ClientService.updateclient(client, id)
            .then(
            fetchAllclients,
            function(errResponse){
                console.error('Error while updating client');
            }
        );
    }

    function deleteclient(id){
        ClientService.deleteclient(id)
            .then(
            fetchAllclients,
            function(errResponse){
                console.error('Error while deleting client');
            }
        );
    }

    function submit() {
        if(self.client.id===null){
            console.log('Saving New client', self.client);
            createclient(self.client);
        }else{
            updateclient(self.client, self.client.id);
            console.log('client updated with id ', self.client.id);
        }
        reset();
    }

    function edit(id){
        console.log('id to be edited', id);
        for(var i = 0; i < self.clients.length; i++){
            if(self.clients[i].id === id) {
                self.client = angular.copy(self.clients[i]);
                break;
            }
        }
    }

    function remove(id){
        console.log('id to be deleted', id);
        if(self.client.id === id) {//clean form if the client to be deleted is shown there.
            reset();
        }
        deleteclient(id);
    }


    function reset(){
        self.client={id:null,nomComplet:'',email:'',tel:'',sexe:''};
        $scope.myForm.$setPristine(); //reset Form
    }

}]);