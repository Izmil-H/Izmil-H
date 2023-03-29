import NavBar from '../components/ui/NavBar';
import './../index.css';
import styles from './Home.module.css'

function HomePage() {
  return (
    <section>
      <h1>Ismail Hosny</h1>
      <NavBar />
      <p class={styles.aboutMe}>
        I am a 12th grade student at Earl Haig Secondary School
      </p>
    </section> 
)}

export default HomePage;
