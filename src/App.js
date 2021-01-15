import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Search from './pages/Search';
import Popup from './pages/Popup';
import Empty from './pages/Empty';
import useTheme from './hooks/useTheme';

import './tailwind.output.css';
import Home from './pages/Home';

function App() {
  const { loadTheme } = useTheme();

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <div className="text-base font-inter text-gray-700">
      <Switch>
        <Route exact path="/popup" component={Popup} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/empty" component={Empty} />
      </Switch>
    </div>
  );
}

export default App;
