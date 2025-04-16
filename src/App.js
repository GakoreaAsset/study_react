// 기본 선언
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

import './App.css';

// 페이지 이동 임포트
import Main from './pages/main/Main';

function App() {

// usestate const선언
const [name, setName] = useState("초기값");

const btnclick = () => {
  setName("버튼클릭");
}

const btncheck = () => {
  alert(name);
}

useEffect(() => {
  console.log(name);
}, [name]);


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
          <Link to='/main' >Main</Link>
        </span>
        <span>&nbsp;&nbsp;
          <Link to="/topics" >Topics</Link>
        </span>
      </nav>

      <bd>
        <button onClick={btnclick}>버튼클릭</button>
        <button onClick={btncheck}>name값 얼럿출력</button>
      </bd>

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
export default App;

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

  const idbtnck = () => {
    setPid("변경된PROMP")
  }

  return (
    <div>
      <h1>News</h1>
      <p>ip : {pid}</p>

      <button onClick={idbtnck}>id변경</button>
    </div>
  );
}