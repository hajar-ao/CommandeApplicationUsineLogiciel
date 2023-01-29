package ma.commande.dao;

import java.util.List;

import ma.commande.model.Client;

public interface IClientDAO {
	public void addClient(Client client);

	public void updateClient(Client client);

	public Client findByIdClient(Integer id_client);

	public void deleteClient(Integer id_client);

	public List<Client> findAllClients();

}
