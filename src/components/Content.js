import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import User from './User';

function Content() {
    return (
      <main className="flex-1 p-4">
        <h2 className="text-2xl font-medium mb-4">Content</h2>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/user" component={User} />
        </Switch>
      </main>
    );
  }
  

export default Content;
