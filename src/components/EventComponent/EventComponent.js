import React, {Component} from 'react';
import './EventComponent.css';
import connection from './../../services/Connector';
var connector = new connection();


export default class EventComponent extends Component {

    state = {
        images: []
    }

    componentDidMount(){

        connector.getService('events', (events) => {
            let imag = [];

            for(var key in events) {
                console.log(events[key].name);
                connector.getImages(events[key].img, (image) =>{
                    imag.push({img: image, name: events[key].name});
                    this.setState({images: imag})
                })
            }
            console.log(this.state);
            this.setState({
                data: events,
            })
        })
    }



    renderEvents = () => {

            let htmlOut = [];

            if(this.state.data !== null && typeof this.state.data !== 'undefined' && typeof this.state.images !== 'undefined' && this.state.images !== null && this.state.images !== []){
                for(var key in this.state.data){
                    this.state.images.forEach((img) =>{
                        console.log(this.state.data[key].img + " equals " + img.name );
                            htmlOut.push(
                                <div className="col-md-12" key={key}>
                                    <img src={img.img} alt={key} />
                                </div>
                            )
                    });

                }
            return htmlOut;
        }

    }


    test = () =>{
        debugger;
        console.log(this.state);
    }


    render() {
        debugger;
        console.log(this.state);
        return (
            <div className="Light-box">
                {
                    this.renderEvents()
                }
                <button onClick={this.test}>Test</button>
            </div>
        );
    }
}