import logo from './logo.svg';
import './App.css';
import Header from './conponents/header/Header';
import TaskCards from './conponents/task/TaskCards';
import Text from './conponents/Text';

function App() {
  return (
    <div className='app'>
      <Header />
      <Text />
      <TaskCards />
    </div>
  );
}

export default App;
