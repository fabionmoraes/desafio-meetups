import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Login from '~/pages/SignIn';
import Register from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';
import Meetups from '~/pages/Meetups/Views';
import MeetupEdit from '~/pages/Meetups/Edit';
import MeetupNovo from '~/pages/Meetups/Novo';
import Profile from '~/pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetups/:id" component={Meetups} isPrivate />
      <Route path="/edit/meetup/:id" component={MeetupEdit} isPrivate />
      <Route path="/meetup/novo" component={MeetupNovo} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  );
}
