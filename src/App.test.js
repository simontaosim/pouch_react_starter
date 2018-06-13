import React from 'react';
import { shallow } from 'enzyme';
import AppRoute from './routes';

it('renders without crashing', () => {
  shallow(<AppRoute />);
});