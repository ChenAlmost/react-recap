import React from 'react';
import { Switch, Link, useRouteMatch, Route, NavLink } from 'react-router-dom';
import { User } from './user';

import './users.css';

export function Users() {
    const { path, url } = useRouteMatch();
    return (
        <div>
            <div>
                <h2>User</h2>
                <ul>
                    <li>
                        <Link to={`${url}/chen`}>
                            <h3>I am Chen</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to={`${url}/cola`}>
                            <h3>I am Cola</h3>
                        </Link>
                    </li>
                    <li>
                        <NavLink exact to={`${url}`} activeClassName='homepage-active' >
                            <h3>I am Homepage</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>

            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic</h3>
                </Route>
                <Route path={`${path}/:name`}>
                    <User />
                </Route>
            </Switch>
        </div>
    );
}
