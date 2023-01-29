package ma.commande.model;



import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonManagedReference;




@Entity
@Table(name = "client")
public class Client{

	@Id
	@GeneratedValue
	@Column(name = "id_client",nullable=false)
	private Integer id_client;
	
	@Column(name = "nomComplet")
	private String nomComplet;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "tel")
	private String tel;
	
	@Column(name = "sexe")
	private String sexe;

	
	@OneToMany(mappedBy="client",cascade = CascadeType.PERSIST)
	@JsonManagedReference
	private Set<Commande> commandes = new HashSet();
		


	public Client() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Client(String nomComplet, String email, String tel, String sexe) {
		super();
		this.nomComplet = nomComplet;
		this.email = email;
		this.tel = tel;
		this.sexe = sexe;
	}

	public Integer getId_client() {
		return id_client;
	}

	public void setId_client(Integer id_client) {
		this.id_client = id_client;
	}

	public String getNomComplet() {
		return nomComplet;
	}

	public void setNomComplet(String nomComplet) {
		this.nomComplet = nomComplet;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getSexe() {
		return sexe;
	}

	public void setSexe(String sexe) {
		this.sexe = sexe;
	}



	public Set<Commande> getCommandes() {
		return commandes;
	}

	public void setCommandes(Set<Commande> commandes) {
		this.commandes = commandes;
	}


}
