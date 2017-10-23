import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HeaderPanel.css';
import Search from './../Search/Search';

export default class HeaderPanel extends Component {

    state = {
       url: './../../../assets/img/header.png'
    };

    render() {
        return (
            <div className="HeaderPanel">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-24">
                            <a title="Juz Startseite" href="/">
                                <img className="HeaderPanel-logo" src={ this.props.imageSrc } alt="Juz-Gauting"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

HeaderPanel.propTypes = {
    imageSrc: PropTypes.string.isRequired,
};