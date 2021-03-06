import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import PouchDB from 'pouchdb';
import 'semantic-ui-css/semantic.min.css';
import AppRoute from './routes';

// PouchDB.debug.enable('*');
// var db = new PouchDB('apps');
// db.info().then(function (info) {
//     console.log(info);
//   });
// var doc = {
// "_id": "mittens",
// "name": "Mittens",
// "occupation": "kitten",
// "age": 3,
// "hobbies": [
//     "playing with balls of yarn",
//     "chasing laser pointers",
//     "lookin' hella cute"
// ]
// };
// db.put(doc);
// db.get('mittens').then(function (doc) {
//     console.log(doc);
//   });
ReactDOM.render(<AppRoute />, document.getElementById('root'));
registerServiceWorker();
