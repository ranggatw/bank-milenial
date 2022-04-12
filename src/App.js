import logo from './logo.svg';
import './App.css';
import Logo from "./assets/image.png";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Bank Milenial</h1>
        <img src={Logo} />
        <h1>
          coming soon<span className="dot">.</span>
        </h1>
        <hr />
        <p>on April 2022</p>
      </div>
    </div>
  );
}

export default App;
