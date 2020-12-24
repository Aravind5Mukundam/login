import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import ProtectedRoute from './components/PrivateRoute';

function App() {
  
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedRoute exact={true} path="/" component={Home} />
        {/*<Route path="/test" component={Home} />*/}
      </Switch>
    </div>
  );
}

export default App;