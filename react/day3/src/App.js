import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'

import Nav from './Nav/Nav'
import Shopping from './page/Shopping/Shopping'
import Login from './page/Login/Login'
import ProductList from './page/ProductList/ProductList'
import Detail from './page/Detail/Detail'

class App extends Component {
  render() {
    return (
    <BrowserRouter>
        <div className="App">
            <Nav/>
            {/*exact能够使路由的匹配更加严格*/}
            <Route exact path="/" component={ProductList}/>
            <Route path="/ProductList" component={ProductList}/>
            <Route path="/Login" component={Login}/>
            <Route path="/Shopping" component={Shopping}/>
            <Route path="/Detail" component={Detail}/>
            <Route/>
        </div>
    </BrowserRouter>
    );
  }
}

export default App;
