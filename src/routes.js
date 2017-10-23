import React from "react";
import {IndexRoute, Route} from "react-router";
import NotFound from './components/NotFound';

export default function () {

    return <Route path="/">

        <IndexRoute getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/home/Home').default);
            })
        }))}/>

        <Route path='*' component={NotFound}/>

    </Route>;

}