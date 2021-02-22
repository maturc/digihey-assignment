import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AddNew } from './routes/AddNew';
import { Details } from './routes/Details';
import { Home } from './routes/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/edit/:id" component={Details} />
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
