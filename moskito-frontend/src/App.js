import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
 
import useCampsites from './hooks/useCampsites'
import Campsites from './Pages/Campsites'
import FilterCampsite from './Pages/FindCampsitesPage'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import PrivateRoute from './PrivateRoute'
import { AuthContext } from './context/auth'
import useToken from './hooks/useToken'


export default function App() {
  const { campsites, getCampsites } = useCampsites()
  const { authTokens, setTokens, deleteTokens } = useToken()

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, deleteTokens}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <PrivateRoute path="/find-campsite" component={() => <FilterCampsite getCampsites={getCampsites} />}/>
          <PrivateRoute path="/campsites" component={() => <Campsites campsites={campsites} />}/>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}


