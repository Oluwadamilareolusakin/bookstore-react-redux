import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './stylesheets/main.scss';


const store = createStore(rootReducer);

const AppWrapper = () => {

  const closeModal = () => {
    const modal = document.querySelector('.open');
    if (modal) {
      modal.classList.toggle('open');
    }  
  }

  return (
    <Provider store={store}>
      <App handleClick={closeModal}/>
    </Provider>
  );
};

ReactDOM.render(<AppWrapper />, document.querySelector('#root'));
