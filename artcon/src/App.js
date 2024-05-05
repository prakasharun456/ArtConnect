import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// import Landing from './Pages/Landing';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Adminpage from './Pages/Adpage/Adminpage';
import SellerRegister from './components/Auth/SellerRegister';
import Sellerlogin from './components/Auth/SellerLogin';
import SellerPage from './Pages/SellerPage/SellerPage';
import ShoppingPage from './Pages/ShoppingPage/Shop';
import Landing from './Pages/Landing';
import OrderConfirmationPage from './Pages/ShoppingPage/ConfirmOrder';
function App() {
  return (
    <BrowserRouter>
    <Routes>


      <Route path='/login' exact element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/home' element={<Landing/>}></Route>
      <Route path='/' element={<Landing/>}></Route>
      <Route path='/shop' element={<ShoppingPage/>}></Route>
      <Route path='/shop/confirmorder' element={<OrderConfirmationPage/>}></Route>
      <Route path='/admin' element={<Adminpage/>}></Route>
      <Route path='/seller' element={<Sellerlogin/>}></Route>
      <Route path='/sellerpage' element={<SellerPage/>}></Route>
      <Route path='/registerseller' element={<SellerRegister/>}></Route>
    </Routes>
    <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
