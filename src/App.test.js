import React from 'react';
import ReactDOM from 'react-dom';
import AppRoute from './routes/';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});
