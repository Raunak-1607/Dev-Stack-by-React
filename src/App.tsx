import { Suspense } from 'react'
import './index.css';
import Nav from './Nav';
import Hero from './Hero';
import Data from './component/Data';


function App() {
  
  const dataFetch = async ()=>{
       const res = await fetch('../public/data.json');
       const data= await res.json();
       return data;
  }

  const DevPromise = dataFetch();

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback="Loading.....">
       <Data DevPromise={DevPromise}></Data>
      </Suspense>
      
    </>
  )
}

export default App
