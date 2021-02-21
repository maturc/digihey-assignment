import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AddNew } from './routes/AddNew';
import { Home } from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/add">
          <AddNew />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
