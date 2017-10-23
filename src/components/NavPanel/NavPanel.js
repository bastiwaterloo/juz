import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import SharedConstants from './../../constants/SharedConstants';
import './NavPanel.css';

class NavPanel extends Component {


    renderMenuPoints = () => {
        let NavPoints = [];
        this.props.menuPoints.forEach((menuPoint) => {
            let active = (this.props.activeRoute.indexOf(menuPoint.route) > -1 && menuPoint.route !== "/") || this.props.activeRoute === menuPoint.route;
            NavPoints.push(
                <a href={menuPoint.route} key={menuPoint.name} title={ menuPoint.name }>
                    <div className={ active ? "NavPanel-menuPoint active" : "NavPanel-menuPoint" }>
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
            <div className="NavPanel container-green">
                <nav className="navbar navbar-inverse">
                    <div className="container container-green">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed"><span className="sr-only">Toggle navigation</span><span
                                className="icon-bar"/><span className="icon-bar"/><span className="icon-bar"/>
                            </button>
                        </div>
                        <div className="navbar-collapse collapse">
                            <ul className="nav navbar-nav">
                                {
                                    this.renderMenuPoints()
                                }
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

        );

    }
}


NavPanel.propTypes = {
    menuPoints: PropTypes.array.isRequired,
    activeRoute: PropTypes.string.isRequired,

};

export default NavPanel;
