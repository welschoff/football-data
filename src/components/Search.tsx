import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <div className={styles.box}>
      <form className={styles.form}>
        <FaSearch className={styles.icon} />
        <input type="text" placeholder="Search" />
      </form>
    </div>
  );
}

export default Search;
