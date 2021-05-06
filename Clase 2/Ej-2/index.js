//Con React y Hooks crear un conversor de dólares a Criptomonedas
//Crear un formulario que tenga un input number, un select un botón 
//Select:
//<option value=”0”>Elegir</option>
//<option value=”5”>coins 1</option>
//<option value=”21”>coins 2</option>
//<option value=”120”>Supercoins</option>
//Cuando el usuario llena los campos y elige la conversión mostrar un un párrafo el resultado (el usuario debe ingresar un número mayor a 0 y elegir una criptomoneda para convertir, de lo contrario dar error)

import React, { useState, useRef } from "react";
import ReactDOM from 'react-dom'

const Componente = () => {
  const ingresado = useRef()
  const elegido = useRef()

  const [resultado, setResult] = useState();

  const convertir = () => {
    if (ingresado.current.value>=0){
      if (elegido.current.value!=="0"){
        let operacion = ((ingresado.current.value)/elegido.current.value).toFixed(2)
        setResult(operacion)
      }
      else{
        setResult("Elija una opción válida")
      }
    }
    else {
      setResult("Ingrese un número positivo")
    }
  }
  return (
    <>
    <header><h1>Conversión de Criptomonedas</h1></header>
    <form>
      <label>USD :</label>
      <input type="number" placeholder="Ingrese su importecen dólares" ref={ingresado}/>
      <select ref={elegido}>
        <option value="0">Elegir...</option>
        <option value="5">Coins 1</option>
        <option value="21">Coins 2</option>
        <option value="120">Supercoins</option>
      </select>
      <input type="button" onClick={convertir} value="convertir"/>
    </form>
    {resultado && !isNaN (resultado)?<p>Resultado: {resultado} Coins</p>:null}
    {resultado && isNaN (resultado)?<p>No se puede realizar el cálculo</p>:null}
  </>
  )

}
 
ReactDOM.render(<Componente />,document.getElementById('root'));