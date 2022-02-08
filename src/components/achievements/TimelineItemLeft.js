import styles from './TimelineItemLeft.module.css';


function TimelineItemLeft(props) {
  return <div className={styles.item}>
    <div className={styles.content}>
      <h2>{props.date}</h2>
      <p>{props.title}</p>
    </div>
  </div>
}
export default TimelineItemLeft; 