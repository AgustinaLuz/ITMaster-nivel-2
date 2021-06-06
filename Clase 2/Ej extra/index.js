import React, { useState } from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";

const cotizaciones = {"coin 1":0.1, "coin 2":5.2, "Supercoin":88.5,"SuperSuperCoin":190};
// Extraemos los keys y los dejamos en un array llamado monedas
const monedas = Object.keys(cotizaciones);

const App =()=> {
  const {register, handleSubmit, errors } = useForm();
  const [cotizacion, setCotizacion] = useState();
  
  const obtenerDatos = data => {
    // Esta constante obtiene el valor del campo cuyo name es monto
    const monto = data.monto;
    // Esta constante obteiene el valor del select cuyo name es selectCripto
    const moneda = data.selectCripto;
    // Hacemos el cálculo y lo seteamos en el estado
    setCotizacion((monto/cotizaciones[moneda]).toFixed(2));    
  
  }  
  return(
    <div id="contendor">
      <div id="logo"></div>
        <div id="form">
          <form onSubmit={handleSubmit(obtenerDatos)} id="miForm">
            <label id="lMonto" htmlFor="usrInput">Ingrese el monto: </label>
            <br/>
            <input name="monto" type="number" ref={register({ min: 0 })} id="usrInput" placeholder="Ingrese el monto"/> <br/>
            {errors.monto && <p>El monto debe ser mayor a 0.</p>}
            
            <label id="lSelect" htmlFor="selectCripto">Seleccione moneda: </label> 
            <br/>
            <select ref={register} name="selectCripto" id="selectCripto"> 
            { 
              //Mapeamos el array de las cript y los ponemos dentro del select
              monedas.map((option,i)=><option key={i} value={option}>{option}</option>) 
            
            }
            </select>
            <br/>

            <div id="botones">              
              <input type="submit" value="Cotizar"/>
            </div>

          </form>
        </div>
        <div id="resultado">        
          {cotizacion?<p>{cotizacion}</p>:null}        
        </div>
      </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
