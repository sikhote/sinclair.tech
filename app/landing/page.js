import classnames from 'classnames';
import { bar, categories } from 'lib/landing';
import styles from './styles.module.scss';

const Home = () => {
  return (
    <main>
      <section className={styles.bar}>
        <ul>
          {bar.map(({ title, url }) => (
            <li key={title}>
              <a href={url}>{title}</a>
            </li>
          ))}
        </ul>
      </section>
      <section className={styles.all}>
        <ul>
          {categories.map(({ title, items }) => (
            <li key={title}>
              <h2>{title}</h2>
              <ul>
                {items.map(({ title, url }) => (
                  <li key={title}>
                    <a href={url}>{title}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Home;
