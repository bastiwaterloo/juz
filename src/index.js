import "es6-promise/auto";
import "isomorphic-fetch";
import React from "react";
import {render} from "react-dom";
import {browserHistory, Router} from "react-router";
import {Provider} from "react-redux";
import HeaderPanel from './components/HeaderPanel/HeaderPanel';
import FooterPanel from './components/FooterPanel/FooterPanel';
import menuePoints from './nav.json';
import NavPanel from './components/NavPanel/NavPanel';
import './../assets/css/bootstrap/bootstrap.min.css';

import createRoutes from "./routes";
import createStore from "./store";

const Root = () => (
    <Provider store={createStore(window.__INITIAL__STATE__)}>
                <div>
                    <HeaderPanel imageSrc={ require('./../assets/img/header.png') }/>
                    <NavPanel menuPoints={ menuePoints } activeRoute={location.pathname} />
                    <Router history={browserHistory}>
                        {createRoutes()}
                    </Router>
                    <FooterPanel />
                </div>
    </Provider>
);

render((<Root/>), document.getElementById('root'));

if (module.hot) module.hot.accept();

