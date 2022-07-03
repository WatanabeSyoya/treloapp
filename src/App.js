import logo from './logo.svg';
import './App.css';
import Header from './conponents/header/Header';
import TaskCards from './conponents/task/TaskCards';

function App() {
  return (
    <div className='app'>
      <Header />
      <TaskCards />
    </div>
  );
}

export default App;
