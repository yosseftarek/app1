import './App.css';
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import About from './components/About/About';
import Layout from './components/Layout/Layout';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';


let routers = createHashRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <About /> },
      { path: '/portfolio', element: <Portfolio /> },
      { path: '/contact', element: <Contact /> },
    ]
  }
])
export default function App() {

  return <>
    <RouterProvider router={routers}></RouterProvider>

  </>
}

