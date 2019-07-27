import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './App.css';
import { reducer } from './reducers';
import { Main } from './Main';

const store = createStore(
  reducer,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
