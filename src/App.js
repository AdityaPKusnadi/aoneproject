import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './components/About';
import User from './components/User';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Detail from './components/Detail';

function App() {
  const [activeMenu, setActiveMenu] = useState('User');

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  }

  return (
      <div className="flex flex-col h-screen overflow-hidden">
        <Header activeMenu={activeMenu}/>
        <div className="flex flex-1 overflow-hidden">
          <Sidebar activeMenu={activeMenu} handleMenuClick={handleMenuClick} />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/user" component={User} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>
        </div>
      </div>
  );
}

export default App;
