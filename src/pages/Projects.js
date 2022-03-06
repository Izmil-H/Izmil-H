import PortfolioList from '../components/projects/PortfolioList';
import styles from './Projects.module.css'


const portfolio = [
  {
    title: "art",
    projects: [
      {title:"Iscometric Studio"},
      {title:"Barbican"},
      {title:"Iscometric Living Room"},
      {title:"Iscometric Bedroom"},
      {title:"Reading Chair"},
    ]
  }, 
  {
    title: "websites",
    projects: [
      {title:"No Quads Website"},
      {title:"Personal Website"},
    ]
  }, 
  {
    title: "programming",
    projects: [
      {title:"Dmodge Discord Bot"},
    ]
  }, 
  {
    title: "games",
    projects: [
      {title:"Space Invaders"},
      {title:"Pong"}
    ]
  }
]

function ProjectsPage() {
  return <section>
    <h1>Projects</h1>
    <section className={styles.portfolio}>
      {portfolio.map((category) => (
        <PortfolioList title={category.title} projects={category.projects}/>
      ))}
    </section>
  </section>
}

export default ProjectsPage;