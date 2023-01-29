package ma.commande.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.util.UriComponentsBuilder;


import ma.commande.model.Produit;

import ma.commande.service.ProduitService;;

@RestController
@EnableWebMvc
@Component
public class ProduitController {

	@Autowired
	ProduitService produitService = new ProduitService();
	
	@RequestMapping(value = "/produit/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Produit> findByIdProduit(@PathVariable("id") int code_produit) {
		Produit produit = produitService.findByIdProduit(code_produit);
		return new ResponseEntity<Produit>(produit, HttpStatus.OK);
	}

	@RequestMapping(value = "/produit/", method = RequestMethod.GET,produces={"application/json"})
	@ResponseBody
	public ResponseEntity<List<Produit>> findAllProduits() {
		System.out.println("************Listes des produits*************************");
		List<Produit> produits = produitService.findAllProduits();
		if(produits.isEmpty()){
	           return new ResponseEntity<List<Produit>>(HttpStatus.NO_CONTENT);
	        }
		System.out.println(produits);
		return new ResponseEntity<List<Produit>>(produits, HttpStatus.OK);
		
	}

	@RequestMapping(value = "/produit/", method = RequestMethod.POST)
	public ResponseEntity<Void> addProduit(@RequestBody Produit produit, UriComponentsBuilder builder) {
		produitService.addProduit(produit);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/produit/{id}").buildAndExpand(produit.getCode_produit()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/produit/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Produit> updateProduit(@RequestBody Produit produit) {
		produitService.updateProduit(produit);
		return new ResponseEntity<Produit>(produit, HttpStatus.OK);
	}

	@RequestMapping(value = "/produit/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Produit> deleteProduit(@PathVariable("id") int code_produit) {
		System.out.println("Fetching & Deleting Produit with id " + code_produit);
		Produit produit = produitService.findByIdProduit(code_produit);
		if (produit == null) {
            System.out.println("Unable to delete. Produit with id " + code_produit + " not found");
            return new ResponseEntity<Produit>(HttpStatus.NOT_FOUND);
        }
		produitService.deleteProduit(code_produit);
		return new ResponseEntity<Produit>(HttpStatus.NO_CONTENT);
	}
}
