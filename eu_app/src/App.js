import './App.css';
import Login from './Components/Login';
import List from './Components/List';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Detailed from './Components/Detailed';

function App() {
  return (
    <div className="App">
      <BrowserRouter > 
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/user/:userid" element={<Detailed />} />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
