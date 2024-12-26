import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//import './ProductCart.css'; // Assuming you add some CSS for styling

const testApi = () => {
  const [products, setProducts] = useState([]);
  useEffect((res) => {
    axios.get(`https://fakestoreapi.com/products`).then(res => setProducts(res.data));
  })

  return (
    <div>
      <h1>Pias</h1>
      
      {products.map((product) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={product.image} style={{width:'12rem'}} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.description}</Card.Text>
            <h3>{product.price}</h3>
            <Button>Show Details</Button>
          </Card.Body>
        </Card>
        /*<div>
          <h1>{product.id}</h1>
          <h1>{product.title}</h1>
          <h1>{product.description}</h1>
          <h1>{product.price}</h1>
          <img src={product.image} alt="" />
        </div>*/
      ))}
    </div>
  )
}
export default testApi
