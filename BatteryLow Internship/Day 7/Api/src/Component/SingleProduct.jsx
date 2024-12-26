import React from 'react'

const SingleProduct = () => {
    
    const [products, setProducts] = useState([]);
  useEffect((res) => {
    axios.get(`https://fakestoreapi.com/products`).then(res => setProducts(res.data));
  })

  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}
export default SingleProduct
