import React, {Component} from "react";
import {Link} from "react-router";
import Helmet from "./Helmet";
import {withWrapper} from "../../server/wrapper"; // this should be create-react-server/wrapper

export class Page extends Component {

    render() {

        return (
            <div>
                <Helmet title='Page'/>
                <h1>Page</h1>
                <hr/>
                <Link to="/">Open index</Link>
            </div>
        );

    }

}

export default withWrapper(Page);