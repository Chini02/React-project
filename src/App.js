
import './App.css';
import Navbar from './components/Navbar';
import Affiche from './components/Pages/Affiche';
import About from './components/Pages/About';
import Detaile from './components/Pages/Detaile';
import Home from './components/Pages/Home';
import Code from './components/Pages/Code';
import {Routes, Route} from 'react-router-dom';
import { useEffect, useState } from 'react';

function App() {
  const [adata , setData] = useState()
  useEffect(()=>{
    const fetchData = async ()=>{
      const res = await fetch('data.json')
      const data = await res.json()
      // console.log(data)
    }
    fetchData()
  },[])
 
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/detaile' element={<Detaile />}></Route>
            <Route path='/affiche' element={<Affiche />}></Route>
            <Route path='/code' element={<Code />}></Route>
        </Routes>
      </div>
    </>
      

  );
}

export default App;
