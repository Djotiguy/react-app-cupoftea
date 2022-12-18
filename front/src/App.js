import {useEffect, useState} from 'react';
import Header from './components/layout/Header';
import Home from './components/Home';
import Footer from './components/layout/Footer';
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
    <Header />
    <Home />
    <ul>
    {teas.map((t, i) => <li key={i}>{t}</li>)}
   </ul>
   <Footer />
   </>
  )
}

export default App;