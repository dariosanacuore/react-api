import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {

  let [datiAttori, setDatiAttori] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://lanciweb.github.io/demo/api/actresses/"
      )
      .then((resp) => {
        setDatiAttori(resp.data.response);
        console.log(datiAttori);
      });
  }, []);
  return (
    <>

    </>
  )
}

export default App
