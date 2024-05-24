
// import './App.css';
// import Header from "./components/Header"
// import Footer from './components/Footer';
// import Home from './pages/Homepage';
// import About from './pages/About';
// import Service from './pages/Service';
// import Project from './pages/Project';

// import {BrowserRouter as Routes,Router,Route} from 'react-router-dom'

// function based component

// function App() {
//   return (
//     <div className="App">
//        <h1>jyothi</h1>
//        <p>welcome to react</p>
//     </div>
//   );
// }

// export default App;

// class based component----------------------------->

// import React ,{Component} from 'react';

// class App extends Component
// {
//   render()
//   {
//     return(
//       <div>
//         {/* <h1 id='hello' className='helloclass'>hello world</h1>

//         // inline css style---------------------------->
//         <p style={{color:"blue",border:"1px solid black",textAlign:"center" ,width:"200px",fontSize:"30px"}}>jyothi</p>

//         // javascript variable css style----------------------->
//         <h4 style={paraStyle}>welcome to react app</h4> */}
//         <div className='navbar'>
//           <ul style={{listStyle:"none",display:"flex",justifyContent:"space-evenly",paddingTop:"4px"}}>
//             <li>Home</li>
//             <li>ContactUs</li>
//             <li>Products</li>
//             <li>Services</li>
//           </ul>

//         </div>

//       </div>
//     )
//   }
// }
// // let paraStyle={color:"green",border:"1px dotted red",textAlign:"center"};
import './App.css';
import Header from "./components/Header"
import Footer from './components/Footer';
import Home from './pages/Homepage';
import About from './pages/About';
import Service from './pages/Service';
import Project from './pages/Project';
import InputValues from './pages/Inputvalues';
import InputValuesButton from './pages/InputvaluesButton';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Counter from './pages/Counter';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service"  element={<Service />}></Route>
        <Route path="/project" element={<Project />}></Route>
        <Route path="/counter" element={<Counter />}></Route>
        <Route path="/inputvalues" element={<InputValues />}></Route>
        <Route path="/inputvaluesbutton" element={<InputValuesButton />}></Route>



      </Routes>
      <Footer />
    </Router>
  )

}

export default App;