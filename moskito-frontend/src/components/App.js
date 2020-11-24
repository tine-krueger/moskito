import { Route, Switch } from 'react-router-dom'
import Campsites from './campsites/Campsites'
import NewCampsite from './campsites/NewCampsite'

export default function App() {
  return (
    <Switch>
      <Route exact path="/">

      </Route>
      <Route path="/campsite">
        <Campsites/>
      </Route>
      <Route path="/new-campsite">
        <NewCampsite/>
      </Route>
    </Switch>
  );
}


