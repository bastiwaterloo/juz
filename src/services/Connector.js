import React from 'react';
import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyAIElwNO9EzAG4PDNctWE855Gl_73lGI0g",
    authDomain: "juz-gauting-efd85.firebaseapp.com",
    databaseURL: "https://juz-gauting-efd85.firebaseio.com",
    projectId: "juz-gauting-efd85",
    storageBucket: "juz-gauting-efd85.appspot.com",
    messagingSenderId: "139995222776"
};
firebase.initializeApp(config);
const db = firebase.database();
const dbRef = db.ref();
var storage = firebase.storage();
var pathReference = storage.ref();

export default class Connector {


    //get Services
    getService = (childName, callback) => {
        dbRef.child('/' + childName).on('value', snapshot => {
            callback(snapshot.val())
        })
    }

    getImages = (name, callback) => {
        pathReference.child('images/' + name).getDownloadURL().then(function(url) {
          callback(url);
        }).catch((error) => {
            console.log(error)
        })
    }


    //set Services

    setEvents = (payload) => {
        dbRef.child('/events').push(payload);
    }

    setTeam = (payload) =>{
        dbRef.child('/team').push(payload);
    }

    setDate = (payload) => {

    }

    setHouse = (payload) => {

    }


}