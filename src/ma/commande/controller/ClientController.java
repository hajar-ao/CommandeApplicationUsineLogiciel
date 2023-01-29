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
import ma.commande.model.Client;
import ma.commande.service.ClientService;

@RestController
@EnableWebMvc
@Component
public class ClientController {

	@Autowired
	ClientService clientService = new ClientService();

	@RequestMapping(value = "/client/{id}", method = RequestMethod.GET)
	@ResponseBody
	public ResponseEntity<Client> findByIdClient(@PathVariable("id") Integer id_client) {
		Client client = clientService.findByIdClient(id_client);
		return new ResponseEntity<Client>(client, HttpStatus.OK);
	}

	@RequestMapping(value = "/client/", method = RequestMethod.GET,produces={"application/json"})
	@ResponseBody
	public ResponseEntity<List<Client>> findAllClients() {
		System.out.println("************Listes des clients*************************");
		List<Client> clients = clientService.findAllClients();
		if(clients.isEmpty()){
	           return new ResponseEntity<List<Client>>(HttpStatus.NO_CONTENT);
	        }
		System.out.println(clients);
		return new ResponseEntity<List<Client>>(clients, HttpStatus.OK);
		
	}
	

	@RequestMapping(value = "/client/", method = RequestMethod.POST)
	public ResponseEntity<Void> addClient(@RequestBody Client client, UriComponentsBuilder builder) {
		clientService.addClient(client);
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/client/{id}").buildAndExpand(client.getId_client()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@RequestMapping(value = "/client/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Client> updateClient(@RequestBody Client client) {
		clientService.updateClient(client);
		return new ResponseEntity<Client>(client, HttpStatus.OK);
	}

	@RequestMapping(value = "/client/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Void> deleteClient(@PathVariable("id") Integer id_client) {
		clientService.deleteClient(id_client);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}

}
