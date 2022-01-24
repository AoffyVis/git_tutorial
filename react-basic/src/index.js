import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FeedSection from './FeedSection/FeedSection';
import HelloComponent from './components/Component';
import ComponentTransaction from './Transaction/ComponentTransaction';
import ReducerComponent from './ReducerComponent/ReducerComponent'
import reportWebVitals from './reportWebVitals';

//create Component

// function HelloComponent() { return <h1>This is Component</h1> }

ReactDOM.render(<FeedSection />,document.getElementById('feed'));

ReactDOM.render(<App />,document.getElementById('root'));

ReactDOM.render(<HelloComponent />,document.getElementById('component'));

ReactDOM.render(<ComponentTransaction />,document.getElementById('componentTransaction'));

ReactDOM.render(<ReducerComponent />,document.getElementById('reducer'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
