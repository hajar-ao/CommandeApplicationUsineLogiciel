"use strict";
var CommandeApp = angular
		.module(
				"CommandeApp",
				[ "ui.router", "snap", "ngAnimate", "ui.bootstrap",
						"ngResource" ])
		.config(
				[
						"$stateProvider",
						"$urlRouterProvider",
						function(r, t) {
									t.when("/dashboard", "/dashboard/overview"),
									t.otherwise("/dashboard/overview"),
									r
											.state("base", {
												"abstract" : !0,
												url : "",
												templateUrl : "views/base.html"
											})
											.state(
													"login",
													{
														url : "/login",
														parent : "base",
														templateUrl : "views/login.html",
														controller : "LoginCtrl"
													})
											.state(
													"dashboard",
													{
														url : "/dashboard",
														parent : "base",
														templateUrl : "views/dashboard.html",
														controller : "DashboardCtrl"
													})
											.state(
													"overview",
													{
														url : "/overview",
														parent : "dashboard",
														templateUrl : "views/dashboard/overview.html"
													})
											.state(
													"newCommande",
													{
														url : "/newCommande",
														parent : "dashboard",
														templateUrl : "views/dashboard/newCommande.html"
													})
											.state(
													"ChercherCommande",
													{
														url : "/ChercherCommande",
														parent : "dashboard",
														templateUrl : "views/dashboard/ChercherCommande.html"
													})
											.state(
													"ChercherClient",
													{
														url : "/ChercherClient",
														parent : "dashboard",
														templateUrl : "views/dashboard/ChercherClient.html",
														controller : "datePickerCtrl"
													})
											.state(
													"resultRechercheCommande",
													{
														url : "/resultRechercheCommande",
														parent : "dashboard",
														templateUrl : "views/dashboard/resultRechercheCommande.html"
													})
											.state(
													"modifierCommande",
													{
														url : "/modifierCommande",
														parent : "dashboard",
														templateUrl : "views/dashboard/modifierCommande.html"
													})
											.state(
													"resultRechercheClient",
													{
														url : "/resultRechercheClient",
														parent : "dashboard",
														templateUrl : "views/dashboard/resultRechercheClient.html"
													})
											.state(
													"modifierClient",
													{
														url : "/modifierClient",
														parent : "dashboard",
														templateUrl : "views/dashboard/modifierClient.html"
													})
											.state(
													"commandesClient",
													{
														url : "/commandesClient",
														parent : "dashboard",
														templateUrl : "views/dashboard/commandesClient.html"
													}).state(
															"newProduit",
															{
																url : "/newProduit",
																parent : "dashboard",
																templateUrl : "views/dashboard/newProduit.html"
															})
						} ]);
angular.module("CommandeApp").controller("LoginCtrl",
		[ "$scope", "$location", function(r, t) {
			r.submit = function() {
				return t.path("/dashboard"), !1
			}
		} ]), angular.module("CommandeApp").controller("DashboardCtrl",
		[ "$scope", "$state", function(r, t) {
			r.$state = t
		} ]);

