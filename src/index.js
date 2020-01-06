import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './stylesheets/main.scss';


const store = createStore(rootReducer);

class AppWrapper extends React.Component{

  closeModal = () => {
    const modal = document.querySelector('.open');
    if (modal) {
      modal.classList.toggle('open');
    }  
  }

  render() {
    return (
      <Provider store={store}>
        <App handleClick={this.closeModal}/>
      </Provider>
    );
  };
};

ReactDOM.render(<AppWrapper/>, document.querySelector('#root'));