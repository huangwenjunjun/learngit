import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import RouteMap from './router/routeMap'
import ModifyEmail from "./Page/steps/modifyEmail";
import ModifyPhone from "./Page/steps/modifyPhone";
import ModifyPassword from "./Page/steps/modifyPassword";
import NotFound from "./Page/404";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <RouteMap/>
                        <Switch>
                            <Route exact path='/' component={App} />
                            <Route path='/email' component={ModifyEmail}/>
                            <Route path='/password' component={ModifyPassword}/>
                            <Route path='/phone' component={ModifyPhone}/>
                            <Route path="*" component={NotFound}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
