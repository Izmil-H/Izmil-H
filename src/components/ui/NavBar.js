import {Link} from 'react-router-dom';

import styles from './NavBar.module.css';

function NavBar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/achievements'>Achievements</Link>
      </li>
    </ul>
  )
}

export default NavBar;