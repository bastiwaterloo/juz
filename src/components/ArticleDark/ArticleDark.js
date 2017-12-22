import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './ArticleDark.css';


export default class ArticleDark extends Component {

    render() {
        return (
            <div className="Dark-box">
                <h1>content</h1>
            </div>
        );
    }
}

ArticleDark.propTypes = {
    backgroundPath: PropTypes.string.isRequired
};