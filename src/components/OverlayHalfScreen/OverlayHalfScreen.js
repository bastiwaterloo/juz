import './OverlayHalfScreen.css';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

export default class OverlayHalfScreen extends Component {

    state ={
      showOverlay: true,
        overlayBig: "none"
    };

    renderContent = () => {
        if(this.state.showOverlay){
            return this.props.content;
        } else {
            return (
                <div className="overlay-small">
                    <h1>Details</h1>
                </div>
            )
        }

    }

    renderToggleButton = () => {
        if (this.state.showOverlay){
            return (
                <div className="toggle-button">
                    <span className="glyphicon glyphicon-arrow-up" onClick={this.toggleOverly} />
                </div>
            )
        }
    }

    toggleOverly = () => {
        this.setState({
            showOverlay: !this.state.showOverlay
        });
        if(this.state.overlayBig === "none") {
            this.setState({
                overlayBig: false
            })
        } else {
            this.setState({
                overlayBig: !this.state.overlayBig
            })
        }
        console.log("state: " + this.state.showOverlay);
        console.log("transform");
    };

    renderOverlay = () => {

            return (
                <div onClick={this.toggleOverly} className={`overlay ${this.state.overlayBig === "none" ? '' : (this.state.overlayBig === true) ? 'inactive' : 'transform-active'}`}>
                    {
                        this.renderContent()
                    }
                    {
                        this.renderToggleButton()
                    }
                </div>
            )
    }


    render() {
        return(
            <div>
                {
                    this.renderOverlay()
                }
            </div>
        )
    }
}

OverlayHalfScreen.propTypes = {
    content: PropTypes.array.isRequired
};