import store from './store/index'
import { addArticle } from './actions/index';

window.store = store;
window.addArticle = addArticle;

// store.subscribe(() => console.log('Look ma, Redux!!'))