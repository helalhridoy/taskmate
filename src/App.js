import Header from './components/Header';
import Addtask from './components/Addtask';
import Showtask from './components/Showtask';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Addtask></Addtask>
      <Showtask></Showtask>
    </div>
  );
}

export default App;
