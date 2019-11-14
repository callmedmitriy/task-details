import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LinksList from './components/LinksList';
import ServiceInfo from './components/ServiceInfo';
import Page404 from './components/Page404';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={LinksList}/>
          <Route path="/:id/details" component={ServiceInfo}/>
          <Route component={Page404}/>
        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
