import React, { useState, useEffect } from "react";
import { Switch, Route, Link, useParams } from 'react-router-dom'

//Home
const Libros = () => {
    const [libros, setLibros] = useState([])
    const getLibros = () => {
        fetch('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json')
        .then(response => response.json())
        .then(libros => setLibros(libros))
        .catch(err => console.log(err.message))
    }

    useEffect(() => { getLibros();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ul>
            { libros.map((libro, i) => <li key={i}><Link to={'/libro/'+libro.isbn}>{libro.title}</Link></li>)}
        </ul>
    )
}

const Libro = () => {
    const [libro, setLibro] = useState([]);
    const parametros = useParams();
    const getLibro = () => {
    fetch('https://raw.githubusercontent.com/bvaughn/infinite-list-reflow-examples/master/books.json')
        .then(response => response.json())
        .then(libro => setLibro(libro))
        .catch(err => console.log(err.message))
    
    }

    useEffect(() => {
              // eslint-disable-next-line react-hooks/exhaustive-deps
        getLibro()
    }, [])

         return (
             <>
             {libro.filter((libro) => libro.isbn === parametros.isbn).map((libro, i) =>
             <article key={i}>
                 <h2 key={libro.isbn}>Titulo: {libro.title}</h2>
                 <p>Isbn: {libro.isbn}</p>
                 <p>Páginas: {libro.pageCount}</p>
                 <img src={libro.thumbnailUrl} alt="img"></img><br/>
                 <p>Descripción: {libro.longDescription}</p>
                 <div>Autores: <ul>{libro.authors.map((autor,i)=><li key={i}>{autor}</li>)}</ul></div>
                 <div>Categorias: <ul>{libro.categories.map((categoria,i)=><li key={i}>{categoria}</li>)}</ul></div>
                </article>
             )}
             <Link to="/">Home</Link>
             </>
         )
}

const App = () => (
    <div className="App">
        <header className="App-header">
            <h1 className="App-title">Libros</h1>
        </header>
        <Switch>
            <Route exact path="/"><Libros /></Route>
            <Route path="/Libro/:isbn"><Libro /></Route>
        </Switch>
    </div>
);
 export default App;