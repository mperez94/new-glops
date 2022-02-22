import React, {useState}  from 'react';
import { Button } from 'react-bootstrap';
import "./style.css"


const ItemCount = ({sumar, restar}) => {
    const [contador, setContador] = useState(1)
    
    const operar = (e) =>{
        if(e.target.value === "+"){
            const numero = sumar(contador);
            setContador(numero);
        } else{
            const numero = restar(contador);
            setContador(numero);
        }
    }

    return (  
    <>
    {contador}
    <Button onClick={(e) => operar(e)} variant="primary" value="+" className='btnmas'>+</Button>
    <Button onClick={(e) => operar(e)} variant="primary" value="-" className='btnmas'>-</Button>
    <Button  variant="success" className='btnagregar'>Agregar al Carrito</Button>
    </>
    );
}
 
export default ItemCount;