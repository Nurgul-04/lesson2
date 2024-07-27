import './App.css';
import Users from './components/Users';

function App() {
  const obj = {
    name:'Nurgul',
    age:20,
    city:'Bishkek'
  }
  return (
    <div className="App"> 
      <Users nur={obj.name}/>
    </div>
  );
}
export default App;


