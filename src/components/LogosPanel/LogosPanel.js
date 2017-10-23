import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LogoBox from '../LogoBox/LogoBox';
import SectionSubHeading from '../SectionSubHeading/SectionSubHeading';
import './LogosPanel.css';

export default class LogosPanel extends Component {


    renderLogos = () => {
        let logoOutput = [];
        this.props.brands.forEach((brand) => {
            logoOutput.push(
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4" key={brand.id}>
                    <div className="LogosPanel-logoBoxContainer">
                        <LogoBox brand={brand}/>
                    </div>
                </div>
            )
        });
        return logoOutput;
    };


    render() {
        return (
            <div className="logos-panel">
                <div className="container">
                    <SectionSubHeading heading="Unsere Marken" />
                    <div className="row">
                        {
                            this.renderLogos()
                        }
                    </div>
                </div>
            </div>
        );
    }
}

LogosPanel.propTypes = {
    brands: PropTypes.array.isRequired
};