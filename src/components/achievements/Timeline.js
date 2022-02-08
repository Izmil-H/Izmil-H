import TimelineItemLeft from './TimelineItemLeft';
import TimelineItemRight from './TimelineItemRight';

import styles from './Timeline.module.css'

function Timeline(props) {
  return <div className={styles.timeline}> {props.timeline.map( (item, index) => {
      return (index%2==0? 
        <TimelineItemLeft date={item.date} title={item.title}/>: 
        <TimelineItemRight date={item.date} title={item.title}/>
        )
    }
  )}</div>
}

export default Timeline;