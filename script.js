var config = {
    apiKey: "AIzaSyAH5awK6VMVwQqf2YVZ9QvFEsut6E68W28",
    authDomain: "myfirst-1905.firebaseapp.com",
    databaseURL: "https://myfirst-1905.firebaseio.com",
    projectId: "myfirst-1905",
    storageBucket: "",
    messagingSenderId: "1054225406823"
  };
  firebase.initializeApp(config);



var messageRef = firebase.database().ref('message');

document.getElementById('formid').addEventListener('submit', submitform);

function submitform(e){
  e.preventDefault();

  var name = getvalues('name');
  var password = getvalues('pass');
  var today = new Date();
  var date = today.getDate();
  saveform(name, password, date);
}

function getvalues(id){
  return document.getElementById(id).value;
}

function saveform(name, password, date){

  var message = messageRef.push();
  
  message.set({
    name: name,
    password: password,
    date: date
  });
}