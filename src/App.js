import logo from './logo.svg';
import './App.css';
import { Card } from 'react-bootstrap';
import CharecterList from './pages/CharecterList';
import { Link, Route, Routes } from 'react-router-dom';
import Charecter from './pages/Charecter';
import Search from './pages/Search';
import Mutation from './pages/Mutation';

function App() {
  return (
    <>
      <div className='d-flex gap-3'>
        <Link to='/'>Home</Link>
        <Link to='/search'>Search</Link>
        <Link to='/mutation'>Mutation</Link>
      </div>
      <Routes>
        <Route strict exact path='/' element={<CharecterList />} />
        <Route strict exact path='/search' element={<Search />} />
        <Route strict exact path='/mutation' element={<Mutation />} />
        <Route strict exact path='/:id' element={<Charecter />} />
      </Routes>
    </>
  );
}

export default App;
