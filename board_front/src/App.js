import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import {Provider} from "mobx-react";

import Home from './Home';
import Board from './Board';
import './App.scss';

import Stores from './Stores';

const App = () => (
    <Provider stores={Stores}>
        <BrowserRouter>
            <header className='app-header'>
                <ul className='menubar'>
                    <li><Link className='menuitem' to="/">Home</Link></li>
                    <li><Link className='menuitem' to="/board">게시판</Link></li>
                </ul>
            </header>

            <section className='app-body'>
                <Route path='/' exact component={Home}/>
                <Route path='/board/:command?/:postid?' component={Board}/>
            </section>
        </BrowserRouter>
    </Provider>
);

export default App;