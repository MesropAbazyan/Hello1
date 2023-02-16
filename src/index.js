import React from 'react';
import ReactDOM from 'react-dom';

function App2() {
  return <div>
    <h1>hello</h1>
    <h2>hello</h2>
  </div>
}

function App() {
  // return React.createElement('div', {}, 'React create element');
  return <div>
    <App2/>
    <span>tag</span>
    <input type='text'/>
  </div>;
}

ReactDOM.render(<App/>, document.getElementById('root'));