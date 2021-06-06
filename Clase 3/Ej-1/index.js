//Con React (sin rutas): mostrar todos los usuarios de https://jsonplaceholder.typicode.com/users cuyo name comienza con C
//Los datos a mostrar son:
//Nombre
//Email
//website
//company name
//company catchPhrase

import React, { useState,useEffect } from 'react';
import ReactDOM from 'react-dom';

const  App = () => {
  const [user, setUser] = useState([])
  
const getUser =() =>{
  fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {setUser(data);})
        .catch(err => console.log(err.message))
}
  useEffect(() => { 
    // eslint-disable-next-line react-hooks/exhaustive-deps 
  getUser()
}, [])

return (  
<section style={{color:'red'}}>
{user.filter(usuario=> usuario.name[0]==='C').map((usuario,i) => 
<>
  <h2 key={i}>Nombre: {usuario.name}</h2>
  <p>Email: {usuario.email}</p>
  <p>Web: {usuario.website}</p> 
  <p>Nombre de la Compañia: {usuario.company.name} </p>
  <p>Eslogan: {usuario.company.catchPhrase} </p>
     <hr/>
</>)
}
</section>
)
};


ReactDOM.render(<App />,document.getElementById('root'));