import React, {useState}  from 'react';
import { Button } from 'react-bootstrap';


const ItemCount = ({sumar, restar}) => {
    const [contador, setContador] = useState(1)
    
    // funcion operar, va a tomar una operacion
    const operar = (e) =>{
        if(e.target.value === "+"){
            const numero = sumar(contador);
            setContador(numero);
        } else{
            const numero = restar(contador);
            setContador(numero);
        }
    }
    // si operacion es SUMAR
    //suma.
    // si es resta, resta

    //operacionRestar
    //tomar el contador y restar con restar.
    // guardar el numero valor.


    return (  
    <>
    {contador}
    <Button onClick={(e) => operar(e)} variant="primary" value="-">-</Button>
    <Button onClick={(e) => operar(e)} variant="primary" value="+">+</Button>
    </>
    );
}
 
export default ItemCount;