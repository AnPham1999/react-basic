import logo from './logo.svg';
import './App.css';
// template + logic
// JSX
//bable
const App =() => {
  let name = 'An';//string
  let number = 2023;
  let address = 'Dak Lak,VN'
  let obj = {name: 'An', chanel: 'AnVlog'};
  let link = 'https://www.facebook.com/profile.php?id=100048209018406'
  


  return (
    <div className="App">
      {console.log('check obj: ', obj)}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World with React.js and {name}!</h1>
        <a href = {link} target = '_blank' >Visit To Chanel for me</a>
        <p>{JSON.stringify(obj)}</p>
      </header>
    </div>
  );
}

export default App;
