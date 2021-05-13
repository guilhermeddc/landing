import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Form from '../pages/Form';
import Feedback from '../pages/Feedback';
import Finish from '../pages/Finish';
import {AlertComponent} from '../components/Alert';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Form} />
        <Route path="/feedback" component={Feedback} />
        <Route path="/finish" component={Finish} />

        <Route path="*" component={() => <Redirect to="/" />} />
      </Switch>

      <AlertComponent />
    </BrowserRouter>
  );
};

export default Routes;
