import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './component/Sidebar';
import Profile from './component/Profile';
import Product from './component/Product/Product';
import Login from './component/Login';
import Registration from './component/Registration';
import AddProduct from './component/Product/AddProduct';
import EditProduct from './component/Product/EditProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registrasi" element={<Registration />} />
        <Route
          path="/*"
          element={
            <>
              <Sidebar />
              <div className="relative ">
                <div className="p-4 sm:ml-64">
                  <div className="p-4 rounded-lg w-screen">
                    <Routes>
                      <Route index path="/profile" element={<Profile />} />
                      <Route path="/product" element={<Product />} />
                      <Route path="/addproduct" element={<AddProduct />} />
                      <Route path="/editproduct/:id" element={<EditProduct />} />
                    </Routes>
                  </div>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
