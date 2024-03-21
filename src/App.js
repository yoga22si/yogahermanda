import logo from './logo.svg';
import './App.css';
import Title from './Title';
import Heading from './Heading';
import FlexItems from './FlexItems';
import Button from './Button';
import './Button.css';

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://miro.medium.com/v2/resize:fit:640/format:webp/0*neg6XwDkFQeXSUhX.png" className="App-logo" alt="logo" />
        <Title />
        <Heading />
        <FlexItems/>
        
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label="klick" onClick="onclick"/>
        
      </header>
    </div>
  );
}

export default App;
