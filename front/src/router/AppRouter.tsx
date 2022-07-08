import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import BeerList from '../components/BeerList';
import BeerForm from '../components/BeerFrom';
import '../index.scss';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <div className='header'>
        <Header />
      </div>
      <div className="main-content">
        <Switch>
          <Route component={BeerList} path="/" exact={true} />
          <Route component={BeerForm} path="/create" />
          <Route component={BeerForm} path="/beers/:id" />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;