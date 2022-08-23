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
import Userview from './Userview';
import Edituser from './Edituser';
import Welcome from './Welcome';


function App() {
  return (

  <BrowserRouter>
   <div className="wrapper">
    <Sidebar></Sidebar>
    <div id="content-wrapper" className="d-flex flex-column col-lg-10">
    <div id="content">
     <Navbar></Navbar>
    <Routes>
     
      <Route path="/dashboard" element={<Dashboard/>}/>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path='/user/:id' element={<Userview/>}/>
      <Route path='/user/edit/:id' element={<Edituser/>}/>
      <Route path="/create-user" element={<Createuser/>}/>
      <Route path="/product" element={<Product/>}/>

    </Routes>
    </div>
    </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
