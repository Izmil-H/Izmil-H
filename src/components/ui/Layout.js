import {Link} from 'react-router-dom'

import styles from './Layout.module.css'; 

function Layout(props) {
  return <div className={styles.flex}>
    <header className={styles.homeButton}>
      <nav>
        <ul>
          <li>
            <Link to='/'>I.H</Link>
          </li>
        </ul>
      </nav>
    </header>
    <main className={styles.main}>{props.children}</main>
    <footer>
        <ul>
            <li>
                <p>Ismail Hosny 2024</p>
            </li>
        </ul>
      {/* <ul>
        <li> 
            <a href="https://github.com/Izmil-H/" target="_blank" rel="noreferrer"> 
              <img src={'./images/footer/githubLogo.png'} alt="Github Logo"></img>  
              <p>Github</p>
            </a>
        </li>
        <li> 
            <a href="https://dmoj.ca/user/ismail111" target="_blank" rel="noreferrer"> 
              <img src={'./images/footer/dmojLogo.png'} alt="Dmoj Logo"></img> 
              <p>Dmoj</p>
            </a> 
        </li>
        <li> 
            <a href="https://codeforces.com/profile/ismail.h" target="_blank" rel="noreferrer"> 
              <img src={'./images/footer/codeforcesLogo.png'} alt="Codeforces Logo"></img> 
              <p>Codeforces</p>
            </a>
        </li>
      </ul>      */}
    </footer>
  </div> 
}

export default Layout;