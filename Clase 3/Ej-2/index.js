//Con React y React Router DOM
//Obtener en la home todos los todos del userId 8 de https://jsonplaceholder.typicode.com/todos
//Mostrar una lista con los ids y un círculo rojo o verde si están completos o no. Que cada id de todo tenga un link que envía a /tarea/:id
//En la ruta /tarea/:id mostrar Id de usuario, id del todo, título y estado (completo o no completado.)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';


ReactDOM.render((
  <BrowserRouter>
    <App />
    </BrowserRouter>
), document.getElementById('root'));