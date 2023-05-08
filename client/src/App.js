import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AddUser from './components/AddUser'
import NavBar from './components/NavBar'
import AllUser from './components/AllUser'
import EditUser from './components/EditUser';
import Homepage from './components/Homepage'
function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/add' element = {<AddUser />} />
        <Route path='/all' element = {<AllUser />} />
        <Route path='/' element={<Homepage/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
