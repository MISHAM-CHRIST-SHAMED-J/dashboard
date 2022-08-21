import './App.css';
import './sb-admin-2.css'
import './sb-admin-2.min.css'
import Sidebar from './sidebar';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import User from './User';
import Product from './Product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Createuser from './Createuser';
import Login from './Login';
import Portal from './Portal';
import Userview from './Userview';
import Edituser from './Edituser';


function App() {
  return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/portal" element={<Portal/>}>
      <Route path="dashboard" element={<Dashboard/>}/>
      <Route path="user" element={<User/>}/>
      <Route path='user/:id' element={<Userview/>}/>
      <Route path='user/edit/:id' element={<Edituser/>}/>
      <Route path="create-user" element={<Createuser/>}/>
      <Route path="product" element={<Product/>}/>
     </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
