import PortfolioItem from './PortfolioItem';
import styles from './PortfolioList.module.css'

function PortfolioList(props) {
  return <section>
    <h1 className={styles.category}>{props.title}</h1>

    {props.projects.map((project, index) => (
      <PortfolioItem
        title = {project.title}
        image = {'./images/projects/' + String(project.title.replace(/\s/g, '_')) + '.png'}
        alt = {project.title}
      />))
    }
  </section>
}

export default PortfolioList;