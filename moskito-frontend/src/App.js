import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Campsites from './pages/Campsites'
import FilterCampsite from './pages/FindCampsitesPage'
import Bookmarks from './pages/Bookmarks'
import Landing from './pages/Landing'
import Login from './pages/Login'
import useToken from './hooks/useToken'
import useCampsites from './hooks/useCampsites'
import PrivateRoute from './PrivateRoute'
import { AuthContext } from './context/auth'
import Register from './pages/Register'

export default function App() {
  const { campsites, getCampsites} = useCampsites()
  const { authTokens, setTokens, deleteTokens, getToken } = useToken()

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, deleteTokens, getToken}}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signin">
            <Register/>
          </Route>
          <PrivateRoute path="/find-campsite" component={() => <FilterCampsite getCampsites={getCampsites} />}/>
          <PrivateRoute path="/campsites" component={() => <Campsites headline={'DeineSuche'} campsites={campsites}  />}/>
          <PrivateRoute path="/bookmarks" component={() => <Bookmarks headline={'Bookmarks'}/>}/>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}


