import {Route, Switch} from 'react-router';

import HomePage from './pages/Home'
import ProjectsPage from './pages/Projects';
import AchievementsPage from './pages/Achievements';
import Layout from './components/ui/Layout';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact={true}>
          <HomePage />
        </Route>
        <Route path='/projects' exact={true}>
          <ProjectsPage />
        </Route>
        <Route path='/achievements' exact={true}>
          <AchievementsPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
