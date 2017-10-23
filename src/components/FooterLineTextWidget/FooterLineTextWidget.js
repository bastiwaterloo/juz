import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './FooterLineTextWidget.css';
import FooterHeading from '../FooterHeading/FooterHeading';

export default class FooterLineTextWidget extends Component {
    render() {
        return (
            <div className="FooterLineTextWidget">
                <FooterHeading className="FooterLineTextWidget-headline" heading={ this.props.title }/>
                <p className="FooterLineTextWidget-text">{ this.props.line1 } <br />{ this.props.line2 }
                    <br />{ this.props.line3 }</p>
            </div>
        )
    }
}

FooterLineTextWidget.propTypes = {
    title: PropTypes.string.isRequired,
    line1: PropTypes.string.isRequired,
    line2: PropTypes.string,
    line3: PropTypes.string
};