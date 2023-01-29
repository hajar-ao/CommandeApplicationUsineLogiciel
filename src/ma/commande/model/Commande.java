package ma.commande.model;



import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;




@Entity
@Table(name = "commande")
public class Commande {
	
	@Id
	@GeneratedValue
	@Column(name = "id_Commande",nullable=false)
	private Integer id_Commande;
	@Column(name = "dateComm")
	private String dateComm;
	@Column(name = "dateLiv")
	private String dateLiv;
	@Column(name = "adresse")
	private String adresse;
	@Column(name = "statutCommande")
	private String statutCommande;

	
	@ManyToOne
	@JoinColumn(name="id_client",nullable = false,columnDefinition="Integer")
    @JsonBackReference
	private Client client;
	
	
	public Client getClient() {
		return client;
	}

	public void setClient(Client client) {
		this.client = client;

	}


	
	public Commande() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Commande(String statutCommande, String dateComm, String dateLiv, String adresse) {
		super();
		this.dateComm = dateComm;
		this.dateLiv = dateLiv;
		this.adresse = adresse;
		this.statutCommande = statutCommande;
	}




	   
	public int getId_Commande() {
		return id_Commande;
	}

	public void setId_Commande(Integer id_Commande) {
		this.id_Commande = id_Commande;
	}

	public String getDateComm() {
		return dateComm;
	}

	public void setDateComm(String dateComm) {
		this.dateComm = dateComm;
	}

	public String getDateLiv() {
		return dateLiv;
	}

	public void setDateLiv(String dateLiv) {
		this.dateLiv = dateLiv;
	}

	public String getAdresse() {
		return adresse;
	}

	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}

	public String getStatutCommande() {
		return statutCommande;
	}

	public void setStatutCommande(String statutCommande) {
		this.statutCommande = statutCommande;
	}

	

}
