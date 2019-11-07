import React from 'react';
import { Provider } from 'react-redux'
import store from './store'
import Search from './components/Search';
import CitiesList from './components/CitiesList'
import ActivitiesList from './components/ActivitiesList'
import './css/app.css'

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Search />
        <div className="outerContainer">
          <CitiesList />
          <ActivitiesList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
