package ma.commande.alimentationData;

import java.util.HashSet;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;

import ma.commande.model.Client;
import ma.commande.model.Commande;
import ma.commande.util.HibernateUtil;

public class testCase {

	public testCase(){
		
	}

	public static void main(String[] args) {
		
		System.out.println("Hibernate one to many (Annotation)");
		Session session = HibernateUtil.getSession();

		session.beginTransaction();
		
		Client client1 = new Client("client1", "client1@gmail.com", "060000000", "H");
	
		Commande commande1 = new Commande("15/07/2016", "16/07/2016", "25 rue 1","Annulee");


		Set<Commande> commandes = new HashSet<Commande>() ; 
		commande1.setClient(client1);

		commandes.add(commande1);
		client1.setCommandes(commandes);
		session.save(client1);
		
		session.save(commande1);
		session.getTransaction().commit();
		
		
	}
}
