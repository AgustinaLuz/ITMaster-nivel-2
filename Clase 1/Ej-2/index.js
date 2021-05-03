import React, { useRef,useState } from "react";
import ReactDOM from "react-dom";
import './index.css'

//Armar un  formulario con useRef y en tiempo real mostrar lo que escribe un usuario hasta que llega a 20 caracteres y ahi mostrar un error en rojo (usar el onKeyUp de React).

const App = () => {
    const userInput = useRef();
    const [user, setuser]= useState ();

const mostrar = () => {
    setuser (userInput.current.value)
}
    
    return (
        <>
        <form>
            <input type="text" placeholder="Nombre de usuario" ref={userInput} maxlenght="20" onKeyUp={mostrar} />
            {user && <strong>Nombre de usuario obligatorio (Max. 10)</strong>}
           
            <button onClick={mostrar} type="button">Mostrar</button>
            
        </form>
        {
            user?<p>Mi nombre de usuario es: <strong className={user>20?"error":null}>{user}</strong></p>:null
        }
        </>
    );
}
ReactDOM.render(<App />, document.getElementById('root'));
