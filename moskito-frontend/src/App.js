import { Route, Switch } from 'react-router-dom'
import useCampsites from './hooks/useCampsites'
import Campsites from './Components/campsites/Campsites'
import FilterCampsite from './Pages/FindCampsitesPage'
import NewCampsite from './Components/campsites/NewCampsite'


export default function App() {
  const { campsites, getCampsites } = useCampsites()
 

  return (
    <Switch>
      <Route exact path="/">
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


