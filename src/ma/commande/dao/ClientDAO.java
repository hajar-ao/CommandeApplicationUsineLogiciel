package ma.commande.dao;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ma.commande.model.Client;
import ma.commande.model.Commande;


@Repository
public class ClientDAO implements IClientDAO {

	@Autowired
	private Session currentSession;

	private Transaction currentTransaction;

	public ClientDAO() {
	}

	public Session openCurrentSession() {
		currentSession = getSession();
		return currentSession;
	}

	public Session openCurrentSessionwithTransaction() {
		currentSession = getSession();
		currentTransaction = currentSession.beginTransaction();
		return currentSession;
	}

	public void closeCurrentSession() {
		currentSession.close();
	}

	public void closeCurrentSessionwithTransaction() {
		currentTransaction.commit();
		currentSession.close();
	}

	private static final SessionFactory sessionFactory;

	static {
		try {
			// On créé une factory de type Annotation afin de les prendre en
			// charge
			sessionFactory = new AnnotationConfiguration().configure().buildSessionFactory();
		} catch (Throwable ex) {
			// Log exception!
			throw new ExceptionInInitializerError(ex);
		}

	}

	/**
	 * Accesseur.
	 * 
	 * @return la session existante
	 * @throws HibernateException
	 */
	public static Session getSession() throws HibernateException {
		return sessionFactory.openSession();
	}

	public Session getCurrentSession() {
		return currentSession;
	}

	public void setCurrentSession(Session currentSession) {
		this.currentSession = currentSession;
	}

	public Transaction getCurrentTransaction() {
		return currentTransaction;
	}

	public void setCurrentTransaction(Transaction currentTransaction) {
		this.currentTransaction = currentTransaction;
	}
	
	@Override
	public void addClient(Client client) {
		Commande commande = new Commande();
		Set<Commande> commandes = new HashSet<Commande>(); 
		commande.setClient(client);
		commandes.add(commande);
		client.setCommandes(commandes);
		getCurrentSession().save(client);
		
		
		
		
	}

	@Override
	public void updateClient(Client client) {
		getCurrentSession().update(client);
	}

	@Override
	public Client findByIdClient(Integer id_client) {
		Client client = (Client) getCurrentSession().get(Client.class, id_client);
		return client;
	}

	@Override
	public void deleteClient(Integer id_client) {
		getCurrentSession().delete(id_client);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Client> findAllClients() {
		List<Client> clients = getCurrentSession().createQuery("from Client").list();
		return clients;
	}

}
