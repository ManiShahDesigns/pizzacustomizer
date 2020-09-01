import React, { useState } from 'react';
import Header from './components/Header';
import Customizer from './components/Customizer';
import Banner from './components/Banner';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';

function App() {
  const [topping, setTopping] = useState([
    { name: 'cheese', add: false, price: 1.5 },
    { name: 'olive', add: false, price: 1 },
    { name: 'pineapple', add: false, price: 2 },
    { name: 'mushroom', add: false, price: 1.5 },
    { name: 'basil', add: false, price: 1 },
    { name: 'tomato', add: false, price: 1 },
    { name: 'bacon', add: false, price: 2.5 }
  ]);

  const onChange = (param) => {
    let arr = [];
    let copy = [...topping];

    copy.filter((val) => {
      if (val.name !== param) {
        arr.push(val);
      } else {
        const rest = { name: val.name, add: !val.add, price: val.price }
        arr.push(rest);
      }

      return arr;
    })

    setTopping(arr);
  }

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/customizer">
          <Customizer topping={topping} onChange={onChange} />
        </Route>
        <Route path="/">
          <Banner />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
