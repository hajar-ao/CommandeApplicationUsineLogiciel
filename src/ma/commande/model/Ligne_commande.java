package ma.commande.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "ligne_commande")
public class Ligne_commande {
	
	
	@Id
	@GeneratedValue
	@Column(name = "id_ligneCommande")
	private int id_ligneCommande;
	
	private Produit produit;
	
	public Produit getProduit() {
		return produit;
	}

	public void setProduit(Produit produit) {
		this.produit = produit;
	}

	@Column(name = "quantite")
	private int quantite;

	public Ligne_commande() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Ligne_commande(int quantite) {
		super();
		this.quantite = quantite;
	}

	
	
	public int getId_ligneCommande() {
		return id_ligneCommande;
	}

	public void setId_ligneCommande(int id_ligneCommande) {
		this.id_ligneCommande = id_ligneCommande;
	}

	public int getQuantite() {
		return quantite;
	}

	public void setQuantite(int quantite) {
		this.quantite = quantite;
	}

}
