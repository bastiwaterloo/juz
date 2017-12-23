import React, {Component} from 'react';
import './EventComponent.css';
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyBclUFwZKZ7ug2IhXistmE10xDqDQfmj9o",
    authDomain: "juz-gauting.firebaseapp.com",
    databaseURL: "https://juz-gauting.firebaseio.com",
    projectId: "juz-gauting",
    storageBucket: "juz-gauting.appspot.com",
    messagingSenderId: "674329592839"
};
firebase.initializeApp(config);
const db = firebase.database();
const dbRef = db.ref().child('events');

export default class EventComponent extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        this.getEvents()
    }

    getEvents = () =>{
        dbRef.on('value', snapshot => {
            this.setState({
                data: snapshot.val()
            })
        })
    };

    renderEvents = () => {
        let htmlOut = [];
        debugger;
        for( let key in this.state.data){
           htmlOut.push(
               <div className="col-md-12" key={key}>
                   <img src={require('./../../../assets/img/' + key + ".png")} alt={key} />
               </div>
           )
        }
        return htmlOut;
    }



    render() {
        return (
            <div className="Light-box">
                {
                    this.renderEvents()
                }
            </div>
        );
    }
}