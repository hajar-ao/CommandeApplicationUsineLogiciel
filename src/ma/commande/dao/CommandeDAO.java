package ma.commande.dao;


import java.util.List;


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
public class CommandeDAO implements ICommandeDAO {
	
	@Autowired
	private Session currentSession;

	private Transaction currentTransaction;

	public CommandeDAO() {
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
	public void addCommande(Commande commande) {
		Client client = (Client)getCurrentSession().createQuery("from Client ORDER BY id DESC").setMaxResults(1)
                .uniqueResult();
		System.out.println("This is the Client :"+client);
		commande.setClient(client);
		getCurrentSession().save(commande);


		
		
	}

	@Override
	public void updateCommande(Commande commande) {
		getCurrentSession().update(commande);
	}

	@Override
	public Commande findByIdCommande(Integer id_Commande) {
		Commande commande = (Commande) getCurrentSession().get(Commande.class, id_Commande);
		return commande;
	}

	@Override
	public void deleteCommande(Integer id_Commande) {
		getCurrentSession().delete(id_Commande);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Commande> findAllCommandes() {
		List<Commande> commandes = getCurrentSession().createQuery("from Commande").list();
		return commandes;
	}

}
