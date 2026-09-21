import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import NoMatch from './Components/NoMatch';
import Products from './Components/Products';
import Featured from './Components/Featured';
import New from './Components/New';
import Users from './Components/Users';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/products" element={<Products />}>
          <Route index element={<Featured />} />
          <Route path="new" element={<New />} />
        </Route>

        <Route path='users' element={<Users />} />
        <Route path='users/:userid' element={<UserDetails />} />
       
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
}

export default App;