import './App.css';
import Contacts from './Components/Contacts';

function App() {
  console.log(process.env.REACT_APP_API_KEY)
  return (
    <div className="App">
      <h1>Pursuit App Template</h1>
      <h2>My New Update</h2>
      <h3>Making changes on sr-first-branch</h3>
      <Contacts />
    </div>
  );
}

export default App;
