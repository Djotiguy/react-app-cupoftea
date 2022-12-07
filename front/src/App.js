import './App.css';
import Formulaire from './components/Formulaire';
import {useEffect, useState} from 'react';
function App() {

  // const [liste, setListe] = useState([]);
  // useEffect(() => {
  //   fetch('/courses')
  //     .then(response => response.json())
  //     .then(res => {
  //       setListe(res);
  //     })

  // }, [])

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
    <Formulaire />
    <ul>
    {teas.map((t, i) => <li key={i}>{t}</li>)}
   </ul>
   </>
  )
}

export default App;