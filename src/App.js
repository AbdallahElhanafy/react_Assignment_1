import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, Router, RouterProvider} from "react-router-dom";
import MasterLayout from "./MasterLayout/MasterLayout";
import StartFrameWork from "./StartFrameWork/StartFrameWork";
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
function App() {

    const router = createBrowserRouter([
        {path: '', element: <MasterLayout/>, children: [
                {path: '', element: <StartFrameWork/>},
                {path: 'about', element: <About/>},
                {path: 'portfolio', element: <Portfolio/>},
                {path: 'contact', element: <Contact/>},
            ]}
    ])


    return (
        <RouterProvider router={router}/>
  );
}

export default App;
