package ma.commande.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "produit")
public class Produit {

	@Id
	@GeneratedValue
	@Column(name = "code_produit")
	private int code_produit;
	@Column(name = "nomProduit")
	private String nomProduit;
	@Column(name = "prixUnitaire")
	private String prixUnitaire;
	
	
	public Produit() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Produit(String nomProduit, String prixUnitaire) {
		super();
		this.nomProduit = nomProduit;
		this.prixUnitaire = prixUnitaire;
	}
	
	public int getCode_produit() {
		return code_produit;
	}

	public void setCode_produit(int code_produit) {
		this.code_produit = code_produit;
	}

	public String getNomProduit() {
		return nomProduit;
	}

	public void setNomProduit(String nomProduit) {
		this.nomProduit = nomProduit;
	}

	public String getPrixUnitaire() {
		return prixUnitaire;
	}

	public void setPrixUnitaire(String prixUnitaire) {
		this.prixUnitaire = prixUnitaire;
	}

	
	
	
	
	

}
