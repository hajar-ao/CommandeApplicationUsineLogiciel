package ma.commande.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import ma.commande.dao.ProduitDAO;
import ma.commande.model.Produit;

@Service
public class ProduitService implements IProduitService {

	@Autowired
	private ProduitDAO produitDAO;

	public ProduitService() {
		produitDAO = new ProduitDAO();
	}

	public void addProduit(Produit produit) {
		produitDAO.openCurrentSessionwithTransaction();
		produitDAO.addProduit(produit);
		produitDAO.closeCurrentSessionwithTransaction();
		
	}

	public void updateProduit(Produit produit) {
		produitDAO.openCurrentSessionwithTransaction();
		produitDAO.updateProduit(produit);
		produitDAO.closeCurrentSessionwithTransaction();
	}

	public Produit findByIdProduit(int code_produit) {
		produitDAO.openCurrentSession();
		Produit produit = produitDAO.findByIdProduit(code_produit);
		produitDAO.closeCurrentSession();
		return produit;
	}

	public void deleteProduit(int code_produit) {
		produitDAO.openCurrentSessionwithTransaction();
		produitDAO.deleteProduit(code_produit);
		produitDAO.closeCurrentSessionwithTransaction();
	}

	public List<Produit> findAllProduits() {
		produitDAO.openCurrentSession();
		List<Produit> produits = produitDAO.findAllProduits();
		return produits;
	}

	public ProduitDAO produitDAO() {
		return produitDAO;
	}
}
