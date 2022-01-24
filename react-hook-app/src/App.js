import './App.css';

import { useState } from 'react';
import ResourceList from './components/ResourceList'
import Users from './components/Users'

function App() {
  const [ resourceName, setResourceName ] = useState('posts');


  // resourceName === currentState resourceName
  // setResourceName === function that changes resourceName
  // useState === function (param === initialState)

  return (
    <>
      <Users />
      <button onClick={() => setResourceName('posts')}>Post</button>
      <button onClick={() => setResourceName('todos')}>Todos</button>
      <ResourceList resourceName={resourceName} />
    </>
  );
}

export default App;
