import {useEffect, useState} from 'react';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Tea from './components/Tea';
import About from './components/About';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  const [teas, setTeas] = useState([]);

    useEffect(() => {
        fetch('/form')
        .then(response => response.json())
        .then(response => {
            setTeas(response);
        })
    })


  return (
    <>
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tea" element={<Tea />} />
        <Route path="/about" element={<About />} />
   {/* <ul>
   {teas.map((t, i) => <li key={i}>{t}</li>)}
   </ul> */}
    </Routes>
    </BrowserRouter>
   <Footer />
   </>
  )
}

export default App;