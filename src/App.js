import React, { useState, useMemo } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import PageNotFound from './components/PageNotFound';
import Leads, { Lead } from './components/Leads';
import Home from './components/Home';
import Navigation from './components/navigation/Navigation';
import './App.css';

const app = {
    leads: [],
    addLead: () => {},
    editLead: () => {},
    removeLead: () => {}
}

const initialLeads = [
    {
        id: 1,
        title: 'Иванов Сергей',
        status: 'todo',
        phone: '79998887766'
    },
    {
        id: 2,
        title: 'Cтепан Суровый',
        status: 'todo',
        phone: '79998887755'
    }
]

export const LeadsContext = React.createContext(app);

function App() {
    const [leads, setLeads] = useState(initialLeads);

    const value = useMemo(() => ({
        leads,
        addLead: setLeads,
        editLead: setLeads,
        removeLead: setLeads
    }), [leads, setLeads]);

  return <div className='App'>
      <Navigation />

      <LeadsContext.Provider value={value} >
          <Container maxWidthMd>
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
          </Container>
      </LeadsContext.Provider>
    </div>;
}

export default App;
