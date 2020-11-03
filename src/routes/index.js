import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Routes from './routeWrapper';

import LoginPage from '../pages/login';
import MoviePage from '../pages/movie';
import UserPage from '../pages/user';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Routes path="/" exact isPrivate component={MoviePage} />
        <Routes path="/login" exact component={LoginPage} />
        <Routes path="/cadastro" exact component={UserPage} />
      </Switch>
    </BrowserRouter>
  );
};
