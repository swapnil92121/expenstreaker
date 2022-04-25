import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { configureStore } from '@reduxjs/toolkit'
import reducer from './Redux/Reducer'
import { Provider } from 'react-redux'


const store = configureStore({ reducer })



ReactDOM.render(<>
  <Provider store={store}>
    <App />
  </Provider>
</>, document.getElementById('root'))