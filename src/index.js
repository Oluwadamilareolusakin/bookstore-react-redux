import React from 'react';
import {Provider} from 'react-redux';
import Redux from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';


const state = [
  {
    title: "The first placeholder book",
    category: "Action",
    id: 1
  },
  
  {
    title: "The second placeholder book",
    category: "Action",
    id: 2
  },
  
  {
    title: "The third placeholder book",
    category: "Action",
    id: 3
  },

  {
    title: "The fourth placeholder book",
    category: "Action",
    id: 4
  },
  
]

const store = Redux.createStore(rootReducer);

<Provider store={store}>
  <App />
</Provider>;
