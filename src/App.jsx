import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [datiAttrici, setDatiAttrici] = useState([]);
  const [datiAttori, setDatiAttori] = useState([]);

  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/")
      .then((resp) => {
        setDatiAttrici(resp.data);
      })

  }, []);


  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actors/")
      .then((resp) => {
        setDatiAttori(resp.data);
      })

  }, []);

  return (
    <>
      <div className="container-attori-tot d-flex ">
        <h1>Attrici</h1>
        <div className="container attrici">
          {datiAttrici.map((persona) => (
            <div className="card" key={persona.id}>
              <img src={persona.image} alt={persona.name} />
              <h2>{persona.name}</h2>
              <p><strong>Nazionalità:</strong> {persona.nationality}</p>
              <p><strong>Nata:</strong> {persona.birth_year}</p>
              {persona.death_year && <p><strong>Morta:</strong> {persona.death_year}</p>}
              <p><strong>Awards:</strong> {persona.awards}</p>
              <p><strong>Film famosi:</strong></p>
              <ul>
                {persona.most_famous_movies.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
              <p>{persona.biography}</p>
            </div>
          ))}
        </div>

        <h1>Attori</h1>
        <div className="container attori">
          {datiAttori.map((persona) => (
            <div className="card" key={persona.id}>
              <img src={persona.image} alt={persona.name} className="foto" />
              <h2>{persona.name}</h2>
              <p><strong>Nazionalità:</strong> {persona.nationality}</p>
              <p><strong>Nato:</strong> {persona.birth_year}</p>
              {persona.death_year && <p><strong>Morto:</strong> {persona.death_year}</p>}
              <p><strong>Awards:</strong> {persona.awards.join(', ')}</p>
              <p><strong>Film famosi:</strong></p>
              <ul>
                {persona.known_for.map((movie, index) => (
                  <li key={index}>{movie}</li>
                ))}
              </ul>
              <p className="bio">{persona.biography}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App;
