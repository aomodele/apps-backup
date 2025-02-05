import './App.css';
import LoginPage from './LoginPage'; // Assuming the LoginPage file exists in the same directory

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>This is Joiner Enrolment App</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LoginPage /> {/* Render the LoginPage component */}
    </div>
  );
}

export default App;
