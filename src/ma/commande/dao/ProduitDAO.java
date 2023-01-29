package ma.commande.dao;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.AnnotationConfiguration;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import ma.commande.model.Produit;


@Repository
public class ProduitDAO implements IProduitDAO {

	@Autowired
	private Session currentSession;

	private Transaction currentTransaction;

	public ProduitDAO() {
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
	public void addProduit(Produit produit) {
		getCurrentSession().save(produit);
	
	}

	@Override
	public void updateProduit(Produit produit) {
		getCurrentSession().update(produit);
	}

	@Override
	public Produit findByIdProduit(int code_produit) {
		Produit produit = (Produit) getCurrentSession().get(Produit.class, code_produit);
		return produit;
	}

	@Override
	public void deleteProduit(int code_produit) {
		Produit produit = new Produit();
		produit.setCode_produit(code_produit);
		getCurrentSession().delete(produit);
	}

	@Override
	@SuppressWarnings("unchecked")
	public List<Produit> findAllProduits() {
		List<Produit> produits = getCurrentSession().createQuery("from Produit").list();
		return produits;
	}

}
