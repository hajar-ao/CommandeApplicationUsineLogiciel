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

import ma.commande.model.Commande;
import ma.commande.service.CommandeService;


@RestController
@EnableWebMvc
@Component
public class CommandeController{

	@Autowired
	CommandeService commandeService = new CommandeService();

	@RequestMapping(value = "/commande/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Commande> findByIdCommande(@PathVariable("id") Integer id_Commande) {
		Commande Commande = commandeService.findByIdCommande(id_Commande);
		return new ResponseEntity<Commande>(Commande, HttpStatus.OK);
	}

	@RequestMapping(value = "/commande/", method = RequestMethod.GET,produces={"application/json"})
	@ResponseBody
	public ResponseEntity<List<Commande>> findAllCommandes() {
		System.out.println("************Listes des commandes*************************");
		List<Commande> commandes = commandeService.findAllCommandes();
		if(commandes.isEmpty()){
	           return new ResponseEntity<List<Commande>>(HttpStatus.NO_CONTENT);
	        }
		System.out.println(commandes);
		return new ResponseEntity<List<Commande>>(commandes, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/commande/", method = RequestMethod.POST)
	public ResponseEntity<Void> addCommande( @RequestBody Commande commande, UriComponentsBuilder builder) {
		commandeService.addCommande(commande);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/commande/{id}").buildAndExpand(commande.getId_Commande()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/commande/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Commande> updateCommande(@RequestBody Commande commande) {
		commandeService.updateCommande(commande);
		return new ResponseEntity<Commande>(commande, HttpStatus.OK);
	}

	@RequestMapping(value = "/commande/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Commande> deleteCommande(@PathVariable("id") Integer id_Commande) {
		 System.out.println("Fetching & Deleting Commande with id " + id_Commande);
			Commande commande = commandeService.findByIdCommande(id_Commande);
			if (commande == null) {
	            System.out.println("Unable to delete. Commande with id " + id_Commande + " not found");
	            return new ResponseEntity<Commande>(HttpStatus.NOT_FOUND);
	        }
			commandeService.deleteCommande(id_Commande);
			return new ResponseEntity<Commande>(HttpStatus.NO_CONTENT);
	}

}
