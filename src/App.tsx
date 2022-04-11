import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Users } from './pages/users';

import './App.css';

function App() {
    return (
        <div>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/user'>User</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/user'>
                    <Users />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
