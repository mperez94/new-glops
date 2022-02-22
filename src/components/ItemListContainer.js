import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ItemCount from './itemCount';
import './style.css';

    function ItemListContainer (){

            const sumaClick = (numero) => {
                if (numero < 10) {
                   return numero + 1;
                }else {
                    return numero;
                }
            };

            const restaClick = (numero) => {
            if (numero > 1) {
                return numero - 1;
            }else {
                return numero;
            }
            };

        
    return (
        <Card className='producto' style={{ width: '18rem'}}>
        <Card.Img variant="top" src="holder.js/100px180" alt='img'/>
        <Card.Body>
          <Card.Title>Producto</Card.Title>
        </Card.Body>
        <ItemCount sumar={sumaClick} restar={restaClick}/>
      </Card>
          );
    }



export default ItemListContainer