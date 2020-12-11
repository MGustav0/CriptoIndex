import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';

import Home from '../pages/Home';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/api/login" exact component={SignIn} />
    <Route path="/api/signup" component={SignUp} />
    <Route path="/api/forgot-password" component={ForgotPassword} />
    <Route path="/api/reset-password" component={ResetPassword} />

    <Route path="/" component={Home} isPrivate />
  </Switch>
);

export default Routes;
