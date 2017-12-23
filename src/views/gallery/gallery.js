import React, {Component} from 'react';
import photos from './../../constants/gallery';
import './gallery.css';

export default class Gallery extends Component {

    state = {
        overlay: false,
        overlaySmall: false,
        overlayImageId: 0,
        overlayImageSrc: ""
        }


    zoomImage = (photo) => {
        debugger;
        this.setState({
            overlay: true,
            overlayImageSrc: photo.src,
            overlayImageId: photo.id
        })
    };

    renderNextZoomedImage = (imageId) => {
        let imageOut = [];
        console.log(imageId);
        photos.forEach((pic) => {
            if(pic.id === imageId + 1){
               this.setState({
                   overlayImageSrc: pic.src,
                   overlayImageId: pic.id
               })
            }
        });
        return imageOut;
    };

    renderPrevImage = (imageId) => {
        let imageOut = [];
        photos.forEach((pic) => {
            if(pic.id === imageId - 1){
                this.setState({
                    overlayImageSrc: pic.src,
                    overlayImageId: pic.id
                })
            }
        });
        return imageOut;
    };


    renderOverlay = () => {
        let imgName = this.state.overlayImageSrc;
        console.log(imgName);
        if(this.state.overlay === true){
            return (
                <div className="overlay">
                    <div className="zoomed-image-wrapper">
                        <span onClick={this.closeZoom} className="glyphicon glyphicon-remove close-button"></span>
                        <span className="glyphicon glyphicon-chevron-left btn-left" onClick={this.renderNextZoomedImage.bind(this, this.state.overlayImageId)}></span>
                        <span className="glyphicon glyphicon-chevron-right btn-right" onClick={this.renderPrevImage.bind(this, this.state.overlayImageId)}></span>
                        <img src={require('./../../../assets/img/' + imgName)} className="image-zoomed" alt={imgName}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                </div>
            )
        }
    };

    closeZoom = () => {
        this.setState({
            overlay: false
        })
    };

    renderImages = () => {
        let output = [];
        photos.forEach((photo) => {
            output.push(
                <div key={photo.src}>
                    <a onClick={this.zoomImage.bind(this, photo)}>
                        <div className="col-sm-4 gallery-item">
                            <img src={require('./../../../assets/img/' + photo.src)} className="image" alt={photo.src}/>
                        </div>
                    </a>
                </div>
            )
        });
        return output;
    };

    render(){
        return (
            <div className="container">
                {
                    this.renderOverlay()
                }
                <div className="col-sm-24">
                    {
                        this.renderImages()
                    }
                </div>
            </div>
        );
    }
}


