import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PouchDB from 'pouchdb';
PouchDB.debug.enable('*');
var db = new PouchDB('http://localhost:5984/kittens');
db.info().then(function (info) {
    console.log(info);
  });
var doc = {
"_id": "mittens",
"name": "Mittens",
"occupation": "kitten",
"age": 3,
"hobbies": [
    "playing with balls of yarn",
    "chasing laser pointers",
    "lookin' hella cute"
]
};
db.put(doc);
db.get('mittens').then(function (doc) {
    console.log(doc);
  });
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
