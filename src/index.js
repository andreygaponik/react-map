import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux'
import Map from './components/Map';
import configureStore from './store/configureStore'

const store = configureStore()
console.log(store)

render(
	<Provider store={store}>
  	<Map data='data.json' />
  </Provider>,
  document.getElementById('root')
);