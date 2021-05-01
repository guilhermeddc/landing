import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Form from '../pages/Form';
import Feedback from '../pages/Feedback';
import Finish from '../pages/Finish';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/finish" component={Finish} />

        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;