package ma.commande.service;

import java.util.List;

import ma.commande.model.Produit;

public interface IProduitService {

	public void addProduit(Produit produit);

	public void updateProduit(Produit produit);

	public Produit findByIdProduit(int code_produit);

	public void deleteProduit(int code_produit);

	public List<Produit> findAllProduits();
}
