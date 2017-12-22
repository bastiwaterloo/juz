import React from "react";
import {IndexRoute, Route} from "react-router";
import NotFound from './components/NotFound';

export default function () {

    return <Route path="/">

        <IndexRoute getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/home/Home').default);
            });
        }))}/>

        <Route path='/club' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/club/club').default);
            })
        }))}/>

        <Route path='/contact' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/contact/contact').default);
            })
        }))}/>

        <Route path='/dates' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/dates/dates').default);
            })
        }))}/>

        <Route path='/gallery' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/gallery/gallery').default);
            })
        }))}/>


        <Route path='/house' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/haus/haus').default);
            })
        }))}/>

        <Route path='/kids' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/kidsprogramm/kidsprogramm').default);
            })
        }))}/>

        <Route path='/rent' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/rent/rent').default);
            })
        }))}/>

        <Route path='/termine' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/termine/termine').default);
            })
        }))}/>

        <Route path='/timetable' getComponent={() => (new Promise((res) => {
            require.ensure([], () => {
                res(require('./views/timetable/timetable').default);
            })
        }))}/>

        <Route path='*' component={NotFound}/>

    </Route>;

}