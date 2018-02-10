import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './NavPanel.css';


class NavPanel extends Component {


    renderMenuPoints = () => {
        let NavPoints = [];
        this.props.menuPoints.forEach((menuPoint) => {
            let active = (this.props.activeRoute.indexOf(menuPoint.route) > -1 && menuPoint.route !== "/") || this.props.activeRoute === menuPoint.route;
            NavPoints.push(
                <a href={menuPoint.route} key={menuPoint.name} title={menuPoint.name}>
                    <div className={active ? "NavPanel-menuPoint active" : "NavPanel-menuPoint"}>
                        <p className="NavPanel-text">
                            {menuPoint.name}
                        </p>
                    </div>
                </a>
            )
        });
        return NavPoints;
    };


    render() {
        return (
            <div className="nav-line">
                <ul className="navigation container">
                    {
                        this.renderMenuPoints()
                    }
                </ul>
            </div>
        );
    }
}















NavPanel.propTypes = {
    menuPoints: PropTypes.array.isRequired,
    activeRoute: PropTypes.string.isRequired,

};

export default NavPanel;
