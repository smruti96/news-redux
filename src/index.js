import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './React/App';
import {Provider} from "react-redux";
import store from "./Redux/store";
import registerServiceWorker from './registerServiceWorker';
store.subscribe(()=>{
    console.log(store.getState())
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
