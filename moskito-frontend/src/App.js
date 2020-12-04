import { Route, Switch } from 'react-router-dom'
import useCampsites from './hooks/useCampsites'
import Campsites from './Pages/Campsites'
import FilterCampsite from './Pages/FindCampsitesPage'
import Landing from './Pages/Landing'
import NewCampsite from './Pages/NewCampsite'


export default function App() {
  const { campsites, getCampsites } = useCampsites()
 

  return (
    <Switch>
      <Route exact path="/">
        <Landing/>
      </Route>
      <Route path="/find-campsite">
        <FilterCampsite getCampsites={getCampsites}/>
      </Route>
      <Route path="/campsites">
        <Campsites campsites={campsites}/>
      </Route>
      <Route path="/new-campsite">
        <NewCampsite/>
      </Route>
    </Switch>
  );
}


