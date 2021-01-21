import { Route, Switch } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Leads, { Lead } from './components/Leads';
import Home from './components/Home';
import Navigation from './components/Navigation';
import './App.css';


function App() {
  return <div className='App'>
      <Navigation />

      <Switch>
          <Route
              path='/'
              exact
              component={Home}
          />

          <Route
              path='/leads/:id'
              exact
              component={Lead}
          />

          <Route
              path='/leads'
              exact
              component={Leads}
          />

          <Route
              path='*'
              component={PageNotFound}
          />
      </Switch>

    </div>;
}

export default App;
