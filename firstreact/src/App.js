import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import {useState} from 'react';

import './App.css';
import Main from './pages/main/Mainain';


function App() {
  return (
    <>
      <BrowserRouter>
      <nav>
        <span>
          <Link to="/" >Home</Link>
        </span>&nbsp;&nbsp;
        <span>
          <Link to="/about" >About</Link>
        </span>&nbsp;&nbsp;
        <span>
          <Link to='/user' >User</Link>
        </span>
        <span>&nbsp;&nbsp;
          <Link to="/topics" >Topics</Link>
        </span>
      </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/main' element={<Main/>}></Route>
        <Route path='/topics' element={<Topics/>}></Route>
        <Route path='/topics/:id' element={<News/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}

function Topics() {
  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to="/topics/components" >Components</Link>
        </li>
        <li>
          <Link to="/topics/props" >Props</Link>
        </li>
      </ul>
    </div>
  );
}

function News() {
  // Parameter value
  let { id } = useParams();
  const [pid, setPid] = useState(id);

  return (
    <div>
      <h1>News</h1>
      <p>ip : {pid}</p>
    </div>
  );
}


export default App;
