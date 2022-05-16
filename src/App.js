import { Route, Routes } from "react-router";

import {Toaster} from 'react-hot-toast'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUser, logout } from "./redux/actions/auth";

import Loader from "./layout/Loader";
import Home from './components/Home'
import Login from "./components/auth/Login";
import Admin from "./components/admin/Admin";
import AdminWrapper from "./components/HOC/AdminWrapper";

const App = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
  dispatch(loadUser())
  },[])


  return ( 
    <div>
      <Toaster/>
      <button onClick={e=>{
        dispatch(logout())
        window.location.reload()
      }} >Logout</button>
      <Routes>
        <Route path="/" element={<Home/>}  />
        <Route path="/login" element={<Login/>}  />
        <Route path="/admin" element={<AdminWrapper><Admin/></AdminWrapper>}  />
      </Routes>
    </div>
   );
}
 
export default App;