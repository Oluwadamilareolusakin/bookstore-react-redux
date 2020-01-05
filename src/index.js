import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/index';
import App from './components/App';
import './stylesheets/main.scss';


const store = createStore(rootReducer);

class AppWrapper extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
};

ReactDOM.render(<AppWrapper/>, document.querySelector('#root'));