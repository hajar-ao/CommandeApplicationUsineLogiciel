package ma.commande.service;

import java.util.List;



import ma.commande.model.Client;


public interface IClientService {

	public void addClient(Client client);

	public void updateClient(Client client);

	public Client findByIdClient(Integer id_client);

	public void deleteClient(Integer client);

	public List<Client> findAllClients();

}
