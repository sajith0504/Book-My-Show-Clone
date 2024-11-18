

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/App.css';
import "./css/Login.css"
import "./css/Signin.css"
import Login from './component/Login';
import Sign from './component/Sign';
import Home from './component/Home';
import Movies from "./component/Movies"
import "./css/movie.css"
import "./css/List.css"
import "./css/Details.css"
import "./css/Theatre.css"

import List from './component/List';
// import Theatre from"./component/Theatre"
import Theatre from "./component/Theatre"

import Details from './component/Details';
import Search from './component/Search';
import PaymentPage from './component/PaymentPage';
import "./css/PaymentPage.css"
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/s" element={<Sign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/det" element={<Details />} />
          <Route path="/list" element={<List/>} />
          <Route path="/theatre" element={<Theatre />} />
          <Route path="/search" element={<Search />} />
          <Route path="/pay" element={<PaymentPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;








// import React from 'react';
// import Theatre from './component/Theatre';
// import "./Theatre.css"

// function App() {
//   return (
//     <div className="App">
//       <h1>Indian Theatre Setup</h1>
//       <Theatre />
//     </div>
//   );
// }

// export default App;








