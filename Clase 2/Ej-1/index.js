//Con React y Hooks
//Crear un formulario que tenga un input text y un botón
//Al tocar un botón mostrar en un div los resultados de las siguientes validaciones respecto a lo que escribió el usuario:
//¿Es número?
//¿Es entero? (solo si es número)
//¿Es par? (solo si es número)
//¿Es positivo? (solo si es número)
  
import ReactDOM from 'react-dom';
import React, { useRef, useState } from 'react';

const App = () =>{
  const textUser = useRef();
  const [text, setText] = useState();

  const Validar = () =>{
    setText(textUser.current.value)
  }
  return(
   <div id="contain">
     <form id="formu">
       <input type="text" ref={textUser} placeholder="Ingrese n°"></input>
       <input type="button" value="validar" onClick={Validar}></input>
     </form>
     <div id="box">
       {text && !isNaN(text)? <p>Es un número</p>:null}
       {text && isNaN(text)?<p id="error">No es un número</p>:null }
       {!isNaN(text)&& text % 1 === 0 ? <p>Es entero</p>: null}
       {!isNaN(text) && text % 1 !==0 ?<p>No es entero</p>:null}
       {!isNaN(text)&& text % 2 === 0 ?<p>Es par </p>:null}
       {!isNaN(text)&& text % 2 !== 0 ?<p>No es par</p>:null}
       {!isNaN(text) && text > 0?<p>Es positivo</p>:null}
       {!isNaN(text) && text < 0?<p>Es negativo</p>:null}
       {!isNaN(text) && text == 0?<p>Es cero</p>:null}


     </div>
   </div> 
  )
 
}
  ReactDOM.render(<App />,document.getElementById('root'));