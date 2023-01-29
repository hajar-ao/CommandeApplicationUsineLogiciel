package ma.commande.alimentationData;

import java.util.List;


import ma.commande.model.Client;
import ma.commande.model.Commande;
import ma.commande.service.ClientService;
import ma.commande.service.CommandeService;

public class GestionCommandeExemple {
	public static void main(String[] args) {
		
      ClientService clientService = new ClientService();
		
		/**** Insertion des clients ********/
		Client client1 = new Client("client1", "client1@gmail.com", "060000000", "H");
	
		
		System.out.println("*** Persist - start ***");
		clientService.addClient(client1);
		
		List<Client> clients1 = clientService.findAllClients();
		System.out.println("Clients Persisted are :");
		for (Client c : clients1) {
			System.out.println("-" + c.toString());
		}
		System.out.println("*** Persist - end ***");
		
		CommandeService commandeService = new CommandeService();


		/**** Insertion des commandes ********/
		Commande commande1 = new Commande("15/07/2016", "16/07/2016", "25 rue 1","Annulee");

		System.out.println("*** addCommande - start ***");
		
		commandeService.addCommande(commande1);

		List<Commande> commandes1 = commandeService.findAllCommandes();
		System.out.println("commandes addCommanded are :");
		for (Commande c : commandes1) {
			System.out.println("-" + c.toString());
		}
		System.out.println("*** addCommande - end ***");

		

	
		System.exit(0);
	}
}
