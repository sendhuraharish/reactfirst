import './App.css'
import React,{useEffect, useState} from 'react'
import Home from './components/home'
import Contact from './components/contact'
import Contact1 from './components/contact1'
import Contact2 from './components/contact2'
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>

function App() {
  const [state,setstate]=useState(<Home/>)
  return (
    <>
      <h3 className='sen' >SENDHURAHARISH</h3>
      <ul className='sh'>
        <li onClick={()=>
          {
            setstate(<Home/>);
          }
          }>HOME </li>
        <li onClick={()=>
          {
            setstate(<Contact/>);
          }
          }>CONTACT</li>
        <li onClick={()=>
          {
            setstate(<Contact1/>);
          }
          }>CONTACT1</li>
        <li onClick={()=>
          {
            setstate(<Contact2/>);
          }
          }>CONTACT2</li>
      </ul>
      <div className='content'>
        {state}
      </div>
    </>
  )
}

export default App
