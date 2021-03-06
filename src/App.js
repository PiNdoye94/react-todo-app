import logo from './logo.svg';
import './App.css';
import './components/todoapp.css';
import TodoApp from './components/TodoApp';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Todo App</h1>
      </header>
      <div className="title"> Todo List</div>
        <TodoApp />
      <footer className="footer">
        By <a href="http://Teknuflex.tech">TeknuFlex</a> Todo App with Reactjs
      </footer>
    </div>
  );
}

export default App;
