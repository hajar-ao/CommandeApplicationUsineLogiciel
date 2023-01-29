package ma.commande.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.commande.dao.CommandeDAO;
import ma.commande.model.Commande;

@Service
public class CommandeService implements ICommandeService {

	@Autowired
	private CommandeDAO commandeDAO;
	

	public CommandeService() {
		commandeDAO = new CommandeDAO();
	}
	

	public void addCommande(Commande commande) {
		commandeDAO.openCurrentSessionwithTransaction();	
		commandeDAO.addCommande(commande);
		commandeDAO.closeCurrentSessionwithTransaction();
	}

	public void updateCommande(Commande commande) {
		commandeDAO.openCurrentSessionwithTransaction();
		commandeDAO.updateCommande(commande);
		commandeDAO.closeCurrentSessionwithTransaction();
	}

	public Commande findByIdCommande(Integer id_Commande) {
		commandeDAO.openCurrentSession();
		Commande commande = commandeDAO.findByIdCommande(id_Commande);
		commandeDAO.closeCurrentSession();
		return commande;
	}

	public void deleteCommande(Integer id_Commande) {
		commandeDAO.openCurrentSessionwithTransaction();
		Commande commande = commandeDAO.findByIdCommande(id_Commande);
		commandeDAO.deleteCommande(id_Commande);
		commandeDAO.closeCurrentSessionwithTransaction();
	}

	public List<Commande> findAllCommandes() {
		commandeDAO.openCurrentSession();
		List<Commande> commandes = commandeDAO.findAllCommandes();
		return commandes;
	}



	public CommandeDAO CommandeDAO() {
		return commandeDAO;
	}
}
