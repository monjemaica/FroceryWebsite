import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrdersScreen from './screens/OrdersScreen';
import Home from './screens/Home';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open');
  };
  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open');
  };
  return (
    <BrowserRouter>
     <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
     <link href="https://fonts.googleapis.com/css?family=Sofia" rel='stylesheet'></link>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <img className="logo" src="/images/grocery.png"></img>
            <Link to="/home">Frocery</Link>
          </div>
          <div className="header-links">
          <Link to="/home">Home</Link>
          <Link to="/">Shop</Link>
          <Link to="/cart">My Cart</Link>
            {userInfo ? (
              <Link to="/profile">{userInfo.name}</Link>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <a href="#">Admin</a>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orders">Orders</Link>
                    <Link to="/products">Products</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <aside className="sidebar">
          <button className="sidebar-close-button" onClick={closeMenu}>
            x
          </button>
          <h2>Shopping Categories</h2>
          <ul className="categories">
            <li>
              <Link to="/category/Fruits">Fruits</Link>
              <Link to="/category/Vegetables">Vegetables</Link>
              <Link to="/category/Meat">Meat</Link>
              <Link to="/category/Seafoods">Seafoods</Link>
              <Link to="/category/Beverages">Beverages</Link>
              <Link to="/category/Breakfast">Breakfast</Link>
              <Link to="/category/Snacks">Snacks</Link>
              <Link to="/category/Frozen">Frozen</Link>
              <Link to="/category/Appliances">Appliances</Link>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/home" component={Home}/>
            <Route path="/orders" component={OrdersScreen} />
            <Route path="/profile" component={ProfileScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/products" component={ProductsScreen} />
            <Route path="/shipping" component={ShippingScreen} />
            <Route path="/payment" component={PaymentScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/category/:id" component={HomeScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">All right reserved.</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;