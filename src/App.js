import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Components/pages/Home';
import Nav from './Components/util/Nav';
import Currents from './Components/pages/Currents';
import { NyTimes } from './Components/pages/NyTimes';
import { Google } from './Components/pages/Google';

function App() {
  return (
    <div className='App-component'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/currents' element={<Currents />}> </Route>
        <Route path='/nytimes' element={<NyTimes />}> </Route>
        <Route path='/googlenews' element={<Google />}> </Route>
        <Route path='/favorites' element={<Home />}> </Route>
      </Routes>
    </div>
  );
}





export default App;
