import React, {Component} from 'react';
import './FooterPanel.css'
import FooterDarkTextWidget from  '../FooterDarkTextWidget/FooterDarkTextWidget';
import FooterLineTextWidget from "../FooterLineTextWidget/FooterLineTextWidget";

export default class FooterPanel extends Component {
    render() {
        return (
            <div className="FooterPanel">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-24">
                            <div className="row">

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-24 col-md-8 col-lg-6">

                        </div>
                        <div className="col-xs-24 col-md-16 col-lg-18">
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
