import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom';

// HOC
import ProtectedRoute from './components/protectedRoute';
import Private from './pages/private';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <ProtectedRoute
          exact={true}
          path="/private"
          component={Private}

        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
