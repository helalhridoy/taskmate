import Header from './components/Header';
import Addtask from './components/Addtask';
import Showtask from './components/Showtask';
import './App.css';
import { useState } from 'react';

function App() {

  const [tasklist, setTasklist] = useState([]);

  return (
    <div className="App">
      <Header></Header>
      <Addtask tasklist={tasklist} setTasklist={setTasklist}></Addtask>
      <Showtask tasklist={tasklist} setTasklist={setTasklist}></Showtask>
    </div>
  );
}

export default App;
