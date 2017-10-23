import React, {Component} from 'react';
import {instanceOf, PropTypes} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import SharedConstants from './../../constants/SharedConstants';
import ArticlesService from './../../services/ArticlesService';
import './WatchPanel.css';

class WatchPanel extends Component {

    state = {
        discount: null,
        uvp: ""
    };

    isHaveCookie = () => {
        const {cookies} = this.props;
        return (cookies.get('Admin') && cookies.get('Admin').pass === SharedConstants.PASSPHRASE_COOKIE);
    };

    componentDidMount = () => {
        this.setState({
            uvp: this.props.watch.uvp || ""
        })
    };

    constructor(props) {
        super(props);

        if (this.props.watch.lowestPrice && this.props.watch.uvp) {
            this.state = {
                discount: Math.round((1 - (this.props.watch.lowestPrice / this.props.watch.uvp)) * 100)
            }
        }
    }

    renderDiscount = () => {
        if (this.state.discount) {
            return (
                <div className="WatchPanel-discountArea">
                    <p>-{this.state.discount}%</p>
                </div>
            )
        }
    };

    renderUvp = () => {
        if (typeof this.props.watch.uvp !== 'undefined' && this.state.discount) {
            return (
                <span className="WatchPanel-oldPrice">
                                {this.props.watch.uvp} {this.props.watch.currency}
                            </span>
            )
        }
    };

    renderPrice = () => {
        if (typeof this.props.watch.lowestPrice) {
            return this.props.watch.lowestPrice.toFixed(2).replace(".", ",") + " " + this.props.watch.currency;
        }
    };

    addNotification = (title, message, level) => {
        if(typeof this.props.addNotification !== 'undefined'){
            this.props.addNotification(title, message, level);
        }
    };

    saveUvp = () => {
        this.addNotification("Preis speichern", "Der Preis wird gespeichert", "warning");
        let articleService = new ArticlesService();
        let watch = this.props.watch;
        watch.uvp = this.state.uvp;
        articleService.updateUvp(watch, () => {
            this.addNotification("Preis gespeichert", "Der Preis wurde erfolgreich gespeichert", "success");
        }, (e) => console.log(e));
    };

    renderUvpInput = () => {
        if (this.isHaveCookie()) {
            return (
                <div className="uvp-input-container">
                    <input className="uvp-input-field" value={this.state.uvp} onChange={(event) => {
                            this.setState({uvp: event.target.value})
                    }} onKeyPress={(event) => {
                        if (event.key === "Enter") {
                            this.saveUvp()
                        }
                    }}/>
                    <button className="ok-button" onClick={this.saveUvp}>Ok</button>
                </div>
            )
        }
    };

    render() {
        return (
            <div>
                <a href={"/Marken/" + this.props.watch.brand.id + "/" + this.props.watch.id}>
                    <div className="WatchPanel-wrapper">
                        <div className="WatchPanel-imageContainer">
                            <img className="WatchPanel-watchImage" src={this.props.watch.imageUrl}
                                 alt={this.props.watch.title}/>
                            <div className="overlay-container">
                                <i className="glyphicon glyphicon-link link-icon"/>
                                <p className="link-title">Details & Preise</p>
                            </div>
                            {
                                this.renderDiscount()
                            }
                            <div className="WatchPanel-priceArea">
                                {
                                    this.renderUvp()
                                }
                                <span className="WatchPanel-price">
                            {
                                this.renderPrice()
                            }
                            </span>
                            </div>
                        </div>
                        <div className="WatchPanel-nameArea">
                            <p className="WatchPanel-watchName">
                                {this.props.watch.title.substring(0, 40)}
                            </p>
                        </div>

                    </div>
                </a>
                {
                    this.renderUvpInput()
                }
            </div>
        );
    }
}


WatchPanel.propTypes = {
    watch: PropTypes.object.isRequired,
    cookies: PropTypes.instanceOf(Cookies).isRequired
};

export default withCookies(WatchPanel);