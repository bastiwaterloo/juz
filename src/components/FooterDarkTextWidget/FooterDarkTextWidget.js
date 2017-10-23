import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './FooterDarkTextWidget.css';
import FooterHeading from '../FooterHeading/FooterHeading';

export default class FooterDarkTextWidget extends Component {
    render() {
        return (
            <div className="FooterDarkTextWidget">
                <FooterHeading className="FooterDarkTextWidget-headline" heading={ this.props.title }/>
                <p className="FooterDarkTextWidget-text">{ this.props.text }</p>
            </div>
        )
    }
}

FooterDarkTextWidget.propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}