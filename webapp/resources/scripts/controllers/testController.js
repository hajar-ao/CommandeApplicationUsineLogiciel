angular
		.module('CommandeApp')
		.controller(
				'testController',
				[
						'$scope',
						'$http',
						function($scope, $http) {

							$scope.SaveClientToCommande = function() {

								var client = {
									"nomComplet" : $scope.nomComplet,
									"email" : $scope.email,
									"tel" : $scope.tel,
									"sexe" : $scope.sexe

								};

								var commande = {
									"dateComm" : $scope.dateComm,
									"dateLiv" : $scope.dateLiv,
									"adresse" : $scope.adresse,
									"statutCommande" : $scope.statutCommande,
									"client" : client

								}

								var resultat = $http
										.post(
												'http://localhost:8080/CommandeApplication/public/client/',
												client);
								resultat.success(function(data, status,
										headers, config) {
									$scope.data = data;

								});
								var resultat = $http
										.post(
												'http://localhost:8080/CommandeApplication/public/commande/',
												commande);
								res.success(function(data, status, headers,
										config) {
									$scope.data = data;

								});
							};

						} ]);