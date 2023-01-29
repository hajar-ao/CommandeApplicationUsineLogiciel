package ma.commande.util;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;

/**
 * Wrapper pour démarrer Hibernate dans un bloc statique d'initialisation.
 * 
 * @author Scub�?Foundation
 */
public class HibernateUtil {
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

	/**
	 * Ferme la session Hibernate.
	 * 
	 * @throws HibernateException
	 */
	public static void closeSession() throws HibernateException {
		sessionFactory.close();
	}
}