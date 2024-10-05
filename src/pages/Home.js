import NavBar from '../components/ui/NavBar';
import './../index.css';
import styles from './Home.module.css'

function HomePage() {
  return (
    <section>
      <h1>Ismail Hosny</h1>
      <NavBar />
      <p class={styles.aboutMe}>
        I am a second year Honours Computer Science student at the University of Waterloo
      </p>
    </section> 
)}

export default HomePage;
