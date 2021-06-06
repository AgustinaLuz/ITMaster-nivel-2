import React, { useState,useEffect } from 'react';
import { Switch,Route,Link,useParams } from 'react-router-dom'

// La ruta de la tarea individual
const Tarea = () => {
  const [tarea, setTarea] = useState( [] )
  let params = useParams();
  const getTarea = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/'+params.id)
      .then(response => response.json())
      .then(tarea => {setTarea(tarea);})
      .catch(err => console.log(err.message))
  }
  useEffect(() => { getTarea();
    // eslint-disable-next-line react-hooks/exhaustive-deps 
}, [])
      return (  
      <section>
        <div>
        <h1>{ params.id } - {tarea.title}</h1>       
         <p>Estado de la Tarea: {tarea.completed ? "Completada🟢":"Falta completar🔴"}</p>   
         <p><Link to="/">Regresar a la home</Link></p>
         </div>
      </section>    
  )
}

// Home
const Tareas = () => {
    const [tareas, setTareas] = useState( [] )
  
    function getTareas() {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(tareas => setTareas(tareas))
        .catch(err => console.log(err.message))
    }
  
    useEffect(() => {
      getTareas()
    }, [])
  
    return (  
      <ul>
          {tareas.filter( tarea => tarea.userId===8).map( trabajo =>
          <li key={trabajo.id}><Link to={"/tarea/"+trabajo.id}>
          {trabajo.title}</Link>
          </li>
            )}    
          
      </ul> 
       
    )
  }

  const App = () => (
        <div className="App">
          <header className="App-header">          
            <h1 className="App-title">Lista de Tareas UsuarioId: 8</h1>
          </header>
          <Switch>
            <Route exact path="/"><Tareas/></Route>
            <Route exact path="/Tarea/:id"><Tarea/></Route>
          </Switch>        
        </div>
      );
export default App;