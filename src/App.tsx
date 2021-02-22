import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MainPage } from '@pages/main-page';
import { Houses } from '@pages/houses';
import { Hosue } from '@pages/house';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/houses" component={Houses} />
        <Route path="/houses/:id" component={Hosue} />
        <Route path="/" component={MainPage} />
      </Switch>
    </div>
  );
};
