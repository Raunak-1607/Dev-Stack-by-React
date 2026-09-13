import { Suspense, useState } from 'react'
import './index.css';
import Nav from './Nav';
import Hero from './Hero';
import Data from './component/Data';
import Footer from './component/Footer';


function App() {
  
  const dataFetch = async ()=>{
       const res = await fetch('../public/data.json');
       const data= await res.json();
       return data;
  }

  // const DevPromise = dataFetch();
  const [DevPromise] = useState(()=>dataFetch());

  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback="Loading.....">
       <Data DevPromise={DevPromise}></Data>
      </Suspense>
      <Footer></Footer>

    </>
  )
}

export default App
