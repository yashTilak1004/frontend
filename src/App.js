import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Register from './components/Register';
import Example from './components/Example';
import Stats from './components/Stats';
import User from './components/User'
import Admin from './components/Admin';
import List from './components/List';
import AboutUs from './components/Gettable';
import Mongo from './components/Mongo';

function App()
{  
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/Register' element={<Register/>}></Route>
      <Route path='/Example' element={<Example/>}></Route>
      <Route path='/Stats' element={<Stats/>}></Route>
      <Route path='/User' element={<User/>}></Route>
      <Route path='/Admin' element={<Admin/>}></Route>
      <Route path='/List' element={<List/>}></Route>
      <Route path='/Get' element={<AboutUs/>}></Route>
      <Route path='/Mongo' element={<Mongo/>}></Route>
    </Routes>
  );
}

export default App;
