package ma.commande.service;

import java.util.List;

import ma.commande.model.Commande;

public interface ICommandeService {

	public void addCommande(Commande commande);

	public void updateCommande(Commande commande);

	public Commande findByIdCommande(Integer id_Commande);

	public void deleteCommande(Integer id_Commande);

	public List<Commande> findAllCommandes();

	
}
