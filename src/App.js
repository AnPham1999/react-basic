import logo from './logo.svg';
import './App.scss';
import Nav from './views/Nav.js';
// template + logic
// JSX
//bable
const App =() => { //class
  let name = 'An';//string
  
  const handleEventclick = (event) => {
    console.log('>>>>click me', event.target.value )
  }


  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World with React.js and {name}!</h1>
        <input type='text' value='Search?' onClick={(event) =>handleEventclick(event)} />
        <button type='button' onClick={(event) => handleEventclick(event) }>Click me!</button>
      </header> 
    </div>
  );
}

export default App;
