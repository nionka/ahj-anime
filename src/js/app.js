import Collapse from './Collapse';
import Feedback from './Feedback';

const collapse = new Collapse(document.querySelector('.container'));
collapse.init();

const popup = new Feedback(document.querySelector('.widget__feedback'));
popup.init();
