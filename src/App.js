import logo from './logo.svg';
import '../src/css/main.css'
import Login from './component/Login';
import { useSelector } from 'react-redux';
import { selectUser } from './feature/userSlice';
import Dashboard from './component/Dashboard';

function App() {

  const user = useSelector(selectUser);

  return (
    <div className="App">
    {user ? <Dashboard /> : <Login /> }
    </div>
  );
}

export default App;
