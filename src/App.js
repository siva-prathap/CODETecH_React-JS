import {Routes,Route} from 'react-router-dom'
// import Product from './component/Product';
import About from './component/About';
import Courses from './component/Courses';
import Nomatch from './component/Nomatch';
import Home from './component/Home';
import New from './component/New';
import Best from './component/Best';
import Navbar from './component/Navbar';
import User from './component/User';
import Order from './component/Order';
import { AuthProvider } from './component/Auth';
import  UserDet from './component/UserDet';
import Profile from './component/Profile';
import Login from './component/Login';
import RequiredAuth from './component/RequiredAuth';
import Signup from './component/signup';
import { Loginsuccess } from './component/loginsuccess';
import SignupSuccess from './component/signupsuccess';
// import Courses from './component/Courses';

function App() {
  
  return (
    <div className="App">
      <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/courses' element={<Courses/>}></Route>
        <Route path="*" element={<Nomatch/>}></Route>
        {/* <Route path='/product' element={<Product/>}>
          <Route path="new" element={<New/>}></Route>
          <Route path="best" element={<Best/>}></Route>
          <Route index element={<New/>}/>  
        </Route> */}
        <Route path='/order' element={<Order/>}></Route>
        <Route path='/user' element={<User/>}>
          <Route path=':Userid' element={<UserDet/>}></Route>
        </Route>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

        <Route path='/profile' element={<RequiredAuth><Profile/></RequiredAuth>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/loginsuccess' element={<Loginsuccess/>}/>
        <Route path='/signupsuccess' element={<SignupSuccess/>}/>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
      
      </AuthProvider>
    </div>
  );
}

export default App;
