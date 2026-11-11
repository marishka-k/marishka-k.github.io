import Container from '../Container/Container';
import Icon from '../Icon/Icon';
import { visibleContacts } from '../../data/contacts';
import styles from './Contacts.module.css';

export default function Contacts() {
  return (
    <section id="contacts" className={styles.contacts} aria-labelledby="contacts-title">
      <Container>
        <div className={styles.contacts__box}>
          <h2 id="contacts-title" className={styles.contacts__title}>
            Давайте сделаем ваш проект
          </h2>
          <p className={styles.contacts__text}>Напишите мне — обсудим задачу, сроки и формат работы.</p>
          <ul className={styles.contacts__list}>
            {visibleContacts.map((c) => (
              <li key={c.id}>
                <a className={styles.contacts__link} href={c.href} target="_blank" rel="noopener noreferrer">
                  <Icon name={c.id} size={20} />
                  {c.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
