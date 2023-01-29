package ma.commande.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.commande.dao.ClientDAO;
import ma.commande.model.Client;


@Service
public class ClientService implements IClientService {
	@Autowired
	private ClientDAO clientDAO;

	public ClientService() {
		clientDAO = new ClientDAO();
	}

	public void addClient(Client client) {
		clientDAO.openCurrentSessionwithTransaction();
		clientDAO.addClient(client);
		clientDAO.closeCurrentSessionwithTransaction();
	
	}

	public void updateClient(Client client) {
		clientDAO.openCurrentSessionwithTransaction();
		clientDAO.updateClient(client);
		clientDAO.closeCurrentSessionwithTransaction();
	}

	public Client findByIdClient(Integer id_client) {
		clientDAO.openCurrentSession();
		Client client = clientDAO.findByIdClient(id_client);
		clientDAO.closeCurrentSession();
		return client;
	}

	public void deleteClient(Integer id_client) {
		clientDAO.openCurrentSessionwithTransaction();
		Client client = clientDAO.findByIdClient(id_client);
		clientDAO.deleteClient(id_client);
		clientDAO.closeCurrentSessionwithTransaction();
	}

	public List<Client> findAllClients() {
		clientDAO.openCurrentSession();
		List<Client> clients = clientDAO.findAllClients();
		
		return clients;
	}


	public ClientDAO clientDAO() {
		return clientDAO;
	}
	
	
}
