import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import Home from './Pages/Home'
import About from './Pages/About';
import Products from './Pages/Products';
import Contact from './Pages/Contact';
import MoreInfo from './components/MoreInfo';
import HomeProductInfo from './components/HomeProductInfo';
import LoginForm from './Pages/LoginForm';
import UsersList from './components/UsersList';
import Register from './components/Firebase/Register';
import SingIn from './components/Firebase/SingIn';
import { Provider } from 'react-redux';
import { store } from './components/Redux/Store';
import Cart from './components/CartPage';
import ShopNow from './components/ShopNow';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home/:id",
        element: <HomeProductInfo />,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/products/:id",
        element: <MoreInfo></MoreInfo>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <LoginForm></LoginForm>,
      },
      {
        path: "/users",
        element: <UsersList></UsersList>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/singIn",
        element: <SingIn></SingIn>,
      },
      {
        path: "/cartpage",
        element: <Cart></Cart>,
      },
      {
        path: "/shopnow",
        element: <ShopNow></ShopNow>,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
