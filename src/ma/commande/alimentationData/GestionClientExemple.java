package ma.commande.alimentationData;
import java.util.List;

import ma.commande.model.Client;
import ma.commande.service.ClientService;

public class GestionClientExemple {

	public static void main(String[] args) {
		ClientService clientService = new ClientService();
		
		/**** Insertion des clients ********/
		Client client1 = new Client("client1", "client1@gmail.com", "060000000", "H");
		Client client2 = new Client("client2", "client2@gmail.com", "060000000", "F");
		Client client3 = new Client("client3", "client3@gmail.com", "060000000", "F");
		System.out.println("*** Persist - start ***");
		clientService.addClient(client1);
		clientService.addClient(client2);
		clientService.addClient(client3);
		List<Client> clients1 = clientService.findAllClients();
		System.out.println("Clients Persisted are :");
		for (Client c : clients1) {
			System.out.println("-" + c.toString());
		}
		System.out.println("*** Persist - end ***");
		
		
		/**** update d'un client ********/
		System.out.println("*** Update - start ***");
		client1.setSexe("H");
		clientService.updateClient(client1);
		System.out.println("Commande Updated is =>" + clientService.findByIdClient(client1.getId_client()));
		System.out.println("*** Update - end ***");
		System.out.println("*** Find - start ***");

		/**** trouver un client ********/
		int id1 = client1.getId_client();
		Client another = clientService.findByIdClient(id1);
		System.out.println("Commande found with id " + id1 + " is =>" + another);
		System.out.println("*** Find - end ***");

		/**** delete by client ********/
		System.out.println("*** Delete - start ***");
		int id3 = client3.getId_client();
		clientService.deleteClient(id3);
		System.out.println("Deleted Commande with id " + id3 + ".");
		System.out.println("Now all commandes are " + clientService.findAllClients().size() + ".");
		System.out.println("*** Delete - end ***");

		/**** find all clients ********/
		System.out.println("*** FindAll - start ***");
		List<Client> clients2 = clientService.findAllClients();
		System.out.println("commandes found are :");
		for (Client c : clients2) {
			System.out.println("-" + c.toString());
		}
		System.out.println("*** FindAll - end ***");
		System.exit(0);
	}

}
