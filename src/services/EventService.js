let firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");



export default class EventService {

    events = (resolve,reject) => {
        let ref = firebase.database().ref('/events');
        ref.on("value", (snapshot) => {
            console.log(snapshot.val());
        }, function (error) {
            console.log("Error: " + error.code);
        });
    };





    


}