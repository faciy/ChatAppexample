import firebase from 'firebase';

class Firebase {
  constructor() {
    this.init();
    this.chekAuth();
  }
  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyB9uafOxn29G7x7QN1RiocjChZmOY--hrE",
        authDomain: "zipapp-8bed8.firebaseapp.com",
        databaseURL: "https://zipapp-8bed8-default-rtdb.firebaseio.com",
        projectId: "zipapp-8bed8",
        storageBucket: "zipapp-8bed8.appspot.com",
        messagingSenderId: "734917908899",
        appId: "1:734917908899:web:af23ebebf4aa1008412216"
      });
    }
  }

  chekAuth = () => {
      firebase.auth().onAuthStateChanged(user => {
          if(!user){
              firebase.auth().signInAnonymously();
          }
      });
  };

  send = messages =>{
      messages.forEach(item => {
          const message = {
              text: item.text,
              timestamp: firebase.database.ServerValue.TIMESTAMP,
              user: item.user
          }

          this.db.push(message);

      });
  };

  parse = message => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);
    return {
        createdAt,
        user,
        text,
        _id
    };
  };

  get  = callback => {
    this.db.on('child_added', snapshot => {
        callback(this.parse(snapshot));
    });
};

off() {
    this.db.off();
}

  get db() {
      return firebase.database().ref("messages")
  } 


 get uid() {
		return (firebase.auth().currentUser || {}).uid;
 }

};

export default new Firebase();