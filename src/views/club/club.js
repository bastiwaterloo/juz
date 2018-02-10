import React, {Component} from 'react';
import './club.css';
import DownloadLink from 'react-download-link'
import JuzEmployee from './../../components/JuzEmployee/JuzEmployee';
import employees from './../../constants/Team';
import db from './../../services/Connector';
var connector = new db();
import emp from './../../constants/Team';


export default class Club extends Component {



    state = {

    }

    componentWillMount(){
        connector.getService('team', (retVal) => {
            this.setState({
                data: retVal
            })
        })
        console.log(this.state.data);
    }



    renderEmployees = () => {
        let empl = [];
        console.log(this.state.data);
        debugger;

        if(this.state.data !== null && typeof this.state.data !== 'undefined'){
           for(var key in this.state.data){
               debugger;
               console.log(key);
               empl.push(
                   <JuzEmployee name={this.state.data[key].name} position={this.state.data[key].position} img={this.state.data[key].img} key={key}/>
               )
           }
        }

        return empl;
    };



    render() {
        return (
            <div className="container">
                <h1>Unser Team:</h1>
                    <div>
                        {
                            this.renderEmployees()
                        }
                    </div>
                    <div className="col-sm-24">
                        <DownloadLink
                            filename="club.pdf"
                            label="Save to disk"
                            exportFile={() => Promise.resolve("My cached data")} />
                    </div>
                </div>

        );
    }

}


