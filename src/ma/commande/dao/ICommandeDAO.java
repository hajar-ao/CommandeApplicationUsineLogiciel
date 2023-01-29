package ma.commande.dao;

import java.util.List;


import ma.commande.model.Commande;

public interface ICommandeDAO {

	public void addCommande(Commande commande);

	public void updateCommande(Commande commande);

	public Commande findByIdCommande(Integer id_Commande);

	public void deleteCommande(Integer id_Commande);

	public List<Commande> findAllCommandes();

	

	

}
