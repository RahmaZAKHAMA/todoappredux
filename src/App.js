
import './App.css';
import AddTask from './components/AddTask';
import Filter from './components/Filter';
import ListTask from './components/ListTask';

function App() {
  return (
    <div className="App">
      <AddTask />
  
      <ListTask/>
    </div>
  );
}

export default App;
