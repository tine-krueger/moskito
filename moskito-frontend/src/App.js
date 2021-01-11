import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Campsites from './pages/Campsites'
import FilterCampsite from './pages/FindCampsitesPage'
import Bookmarks from './pages/Bookmarks'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import useToken from './hooks/useToken'
import { useCampsites } from './hooks/useCampsites'
import PrivateRoute from './PrivateRoute'
import { AuthContext } from './context/auth'
import ScrolltoTop from './services/scrollToTop'
import NotFound from './pages/NotFound'

export default function App() {
  const { errors, campsites, isLoading, setIsLoading, getCampsites} = useCampsites()
  const { authTokens, setTokens, deleteTokens, getToken } = useToken()
  

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens, deleteTokens, getToken}}>
      <Router>
        <ScrolltoTop/>
        <Switch>
          <Route exact path="/">
            <Landing/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Register />
          </Route>
          <PrivateRoute path="/find-campsite" component={() => <FilterCampsite headline={'Deine Suche'} setLoading={setIsLoading} getCampsites={getCampsites} />}/>
          <PrivateRoute path="/campsites" component={() => <Campsites headline={'Die Vorschläge'} isLoading={isLoading} campsites={campsites} errors={errors} />}/>
          <PrivateRoute path="/bookmarks" component={() => <Bookmarks headline={'Deine Lieblinge'} />}/>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
}


