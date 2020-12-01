import { Route, Switch } from 'react-router-dom'
import useCampsites from '../hooks/useCampsites'
import Campsites from './campsites/Campsites'
import FilterCampsite from './campsites/FilterCampsite'
import NewCampsite from './campsites/NewCampsite'

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


