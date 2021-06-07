import React, { useState, useEffect } from 'react';
import { Switch, Route, Link, useParams } from 'react-router-dom'

const Paises = () => {
  const [paises, setPaises] = useState([])

  const getPaises = () => {
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json')
      .then(response => response.json())
      .then(paises => setPaises(paises))
      .catch(errores => console.log(errores))
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getPaises()
  }, [])

  const paiseskeys = Object.keys(paises)
  return(
    <ul>
      { paiseskeys.filter(pais => pais[0].toUpperCase() ==='A').map((pais, i) => <li key={i}><Link to={'/pais/'+pais}>{pais}</Link></li>) }
    </ul>
  )
}

const Pais = () => {
  const [pais, setPais] = useState([]);
  const parametros = useParams();
  const getPais = () => {
    fetch('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.json')
      .then(response => response.json())
      .then(pais => setPais(pais))
      .catch(errores => console.log(errores))
  }

  useEffect(() => {getPais()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return(
         <>

          <> Ciudades: <ul>{ pais[parametros.ispa]? pais[parametros.ispa].map((pais,i) => <li key={i}>{pais}</li>):null }</ul> </>
          <Link to='/'>Regresar al Home</Link>
          
         </>
  )
}


const App = () => (
    <div className="App">
      <header className="App-header">          
        <h1 className="App-title">Paises</h1>
      </header>
      <Switch>
        <Route exact path="/"><Paises/></Route>
        <Route path="/pais/:ispa"><Pais/></Route>
      </Switch>        
    </div>
  );
  export default App;