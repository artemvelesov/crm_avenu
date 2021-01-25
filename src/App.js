import React, { useState, useMemo, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { setItem, getItem } from './utils';
import PageNotFound from './components/PageNotFound';
import Leads, { Lead } from './components/leads/Leads';
import Home from './components/Home';
import Navigation from './components/navigation/Navigation';
import './App.css';


const app = {
    leads: [],
    addLead: () => {},
    removeLead: () => {},
    editLead: () => {},
}

export const LeadsContext = React.createContext(app);


function App() {
    const [leads, setLeads] = useState(getItem('leads') || []);

    const value = useMemo(() => ({
        leads,
        addLead: setLeads,
        removeLead: setLeads,
        editLead: setLeads
    }), [leads, setLeads]);

    useEffect(() => setItem('leads', leads), [leads]);

    return <div className='App'>
        <LeadsContext.Provider value={value} >
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
        </LeadsContext.Provider>

    </div>;
}

export default App;
