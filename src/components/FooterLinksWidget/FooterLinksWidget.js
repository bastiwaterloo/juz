import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './FooterLinksWidget.css';
import FooterHeading from '../FooterHeading/FooterHeading';

export default class FooterLinksWidget extends Component {
    render() {
        return (
            <div className="FooterLinksWidget">
                <FooterHeading heading={ this.props.title }/>
                <ul className="FooterLinksWidget-linkList">
                    {
                        this.props.links.map(function (link) {
                            return (<li className="FooterLinksWidget-listPoint" key={ link.key }><a
                                className="FooterLinksWidget-link" href={ link.route }>{ link.name }</a></li> )
                        })
                    }
                </ul>
            </div>
        );
    }
}

FooterLinksWidget.propTypes = {
    links: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};