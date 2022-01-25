import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';

function Search() {
  return (
    <div className={styles.form}>
      <div>
        <FaSearch className={styles.icon} />
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Search;
