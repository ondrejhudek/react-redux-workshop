import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.requestAnimationFrame = (cb) => {
	setTimeout(cb, 0);
};