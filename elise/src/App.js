import React from 'react';
import Footer from './components/Footer/Footer.js';
import Header from './components/Header/Header.jsx';
import { Provider, useDispatch } from 'react-redux';
import store from './store';
import Menu from './components/Menu/Menu.jsx';
import SiginForm from './components/SigninForm/SigninForm.jsx';
import SignupForm from './components/SignupForm/SignupForm.jsx';
import Hero from './components/Hero/Hero.jsx';
import Combo from './components/Combo/Combo.jsx';
import OrderForm from './components/OrderForm/OrderForm.jsx';
import Cart from './components/Cart/Cart.jsx';
import Button from 'react-bootstrap/Button';



function App() {
  const [cartModalShow, setCartModalShow] = React.useState(false);
  const [orderModalShow, setOrderModalShow] = React.useState(false);
  const [signinModalShow, setSigninModalShow] = React.useState(false);

  return (
    <Provider store={store}>
      <Header
        showCart={() => setCartModalShow(true)}
        showSignin={() => setSigninModalShow(true)}
      />
      <Cart show={cartModalShow} onHide={() => setCartModalShow(false)} />
      <OrderForm
        show={orderModalShow}
        onHide={() => setOrderModalShow(false)}
      />
      <Hero showOrderForm={() => setOrderModalShow(true)} />

      <Combo />
      <SiginForm
        show={signinModalShow}
        onHide={() => setSigninModalShow(false)}
      />
      {/* <SignupForm /> */}
      <Menu />
      <Footer />
    </Provider>
  );
}

export default App;
