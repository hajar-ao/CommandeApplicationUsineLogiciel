package ma.commande.alimentationData;

import java.util.List;


import ma.commande.model.Produit;
import ma.commande.service.ProduitService;

public class GestionProduitExemple {
	public static void main(String[] args) {
		ProduitService produitService = new ProduitService();

		/**** Insertion des produits ********/
		Produit produit1 = new Produit("produi1", "100");
		Produit produit2 = new Produit("produi2", "200");
		Produit produit3 = new Produit("produi3", "300");
		
		System.out.println("*** Persist - start ***");
		produitService.addProduit(produit1);
		produitService.addProduit(produit2);
		produitService.addProduit(produit3);
		List<Produit> produits1 = produitService.findAllProduits();
		System.out.println("produits Persisted are :");
		for (Produit p : produits1) {
			System.out.println("-" + p.toString());
		}
		System.out.println("*** Persist - end ***");

		/**** update d'une Produit ********/
		System.out.println("*** Update - start ***");
		produit1.setNomProduit("produitXXX");
		produitService.updateProduit(produit1);
		System.out.println("Produit Updated is =>" + produitService.findByIdProduit(produit1.getCode_produit()));
		System.out.println("*** Update - end ***");
		System.out.println("*** Find - start ***");

		/**** trouver une Produit ********/
		int id1 = produit1.getCode_produit();
		Produit another = produitService.findByIdProduit(id1);
		System.out.println("Produit found with id " + id1 + " is =>" + another);
		System.out.println("*** Find - end ***");

		/**** delete by produits ********/
		System.out.println("*** Delete - start ***");
		int id3 = produit3.getCode_produit();
		produitService.deleteProduit(id3);
		System.out.println("Deleted Produit with id " + id3 + ".");
		System.out.println("Now all produits are " + produitService.findAllProduits().size() + ".");
		System.out.println("*** Delete - end ***");

		/**** find all produits ********/
		System.out.println("*** FindAll - start ***");
		List<Produit> produits2 = produitService.findAllProduits();
		System.out.println("produits found are :");
		for (Produit p : produits2) {
			System.out.println("-" + p.toString());
		}
		System.out.println("*** FindAll - end ***");

	
		System.exit(0);
	}
}
