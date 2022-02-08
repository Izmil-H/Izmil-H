import styles from './PortfolioItem.module.css';

function PortfolioItem(props) {
  return <figure className={styles.portItem}>
    <img src={props.image} alt={props.alt} />
    <figcaption className={styles.portDesc}>
      <p>{props.title}</p>
    </figcaption>
  </figure>;
}
export default PortfolioItem; 