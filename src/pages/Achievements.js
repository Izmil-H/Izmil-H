import Timeline from '../components/achievements/Timeline.js';

const timeline = [
  {date: "March 2021", title:"100 problems solved on Dmoj"},
  {date: "February 2021", title:"Scored 45 on CCC Senior"},
  {date: "February 2021", title:"Blue rank on Dmoj"},
  {date: "January 2021", title:"Reached silver rank in USACO"},
  {date: "March 2020", title:"DECA provincial's"},
  {date: "February 2020", title:"Scored 47 on CCC Junior"},
]

function ProjectsPage() {
  return <section>
    <h1>Achievements</h1>
    <Timeline timeline={timeline}/>
  </section>
}

export default ProjectsPage;