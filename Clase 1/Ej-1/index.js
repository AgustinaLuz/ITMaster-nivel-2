import React, { useRef } from "react";
import ReactDOM from 'react-dom';
import { useForm } from "react-hook-form";
import './index.css';
import swal from 'sweetalert';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Alert } from 'reactstrap';


const App = () =>{
const { register, handleSubmit, errors } = useRef();
const [ dataDelForm, setDataDelForm] = useRef();
const onSubmit = data =>
{
    swal(`${data.nombre} ${data.apellido} - ${data.pais} - ${data.numero} - ${data.fecha} `);
    setDataDelForm(data.nombre);
}
    // const Resultado =(dataDelForm) =>{
    //     return <p>Resultado: {dataDelForm.nombre}</p>
    //   } 
return (
    <>
  <Form onSubmit={handleSubmit(onSubmit)}>
    <FormGroup>
      <Label for="nombre">Nombre</Label>
      <Input innerRef={register({ required: true, maxLength: 10 })} name="nombre" id="nombre" placeholder="Nombre" />
      {errors.nombre && <Alert color="danger">Nombre obligatorio (max. 10)</Alert>}
    </FormGroup>
    <FormGroup>
      <Label for="apellido">Apellido</Label>
      <Input  innerRef={register} name="apellido" id="apellido" placeholder="Apellido" />
    </FormGroup>
    <FormGroup>
      <Label for="pais">Seleccionar</Label>
      <Input innerRef={register} type="select" name="pais" id="pais">
          <option value="1">Argentina</option>
          <option value="2">Uruguay</option>
          <option value="3">Chile</option>
          <option value="4">Paraguay</option>
      </Input>
    </FormGroup>
    <FormGroup >
      <Label for="numero">Numero preferido</Label>
        <Input
            innerRef={register}
            type="number"
            name="numero"
            id="numero"
            placeholder="Numero preferido"
        />
      </FormGroup>
      <FormGroup>
        <Label for="fecha">Fecha de nacimiento</Label>
        <Input
            innerRef={register}
            type="date"
            name="fecha"
            id="fecha"
            placeholder="Fecha de nacimiento"
        />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    <p>{dataDelForm}</p>
    {/* <Resultado /> */}
    </>
  );
}
ReactDOM.render(<App />, document.getElementById('root'))
