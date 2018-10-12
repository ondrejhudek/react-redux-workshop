import React from 'react';
import App from '../App';
import {shallow} from 'enzyme';

test('App renders', () => {
	expect(shallow(<App />)).toMatchSnapshot();
});