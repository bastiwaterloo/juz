import React, {Component} from "react";
import {connect} from "react-redux";
import {withWrapper} from "../../server/wrapper"; // this should be create-react-server/wrapper
import {barAction} from "../store";
import {render} from 'react-dom'

const Loading = ({state}) => (<div>Loading: {state}...</div>);

export class App extends Component {

    state = {};

    /**
     * This function is used for server-side rendering
     * @param location
     * @param params
     * @param query
     * @param store
     * @return {Promise}
     */
    static async getInitialProps({location, query, params, store}) {
        await store.dispatch(barAction());
        return {custom: 'custom' + Date.now()};
    };

    getPropsAgain() {
        this.props.getInitialProps();
    }

    render() {

        const {foo, bar, custom, initialError} = this.props;

        if (initialError) return <pre>Initial Error: {initialError.stack}</pre>;

        if (bar === 'initial' || bar === 'loading') return <Loading state={bar}/>;

        return (
            <div>

            </div>

        );
    }
}

App = connect(state => state)(App);

export default withWrapper(App);