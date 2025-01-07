import React, { useContext } from 'react'
import { BasketContext } from '../../../context/basket'
import Col from 'react-bootstrap/esm/Col'
import Row from 'react-bootstrap/esm/Row'

const Basket = () => {

  const { basket, removeBasketItem, increaseBasketCount, decreaseBasketCount, clearBasket } = useContext(BasketContext)

  return (
    <section className='sec3'>
      <button onClick={() => clearBasket()}>CLEAR</button>
      <Row className='cards'>
        {basket.map((p) => (
          <Col xs={4} className='card' key={p.id}>
            <img src={p.image} />
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <p>{p.quantity}</p>
            <div className='action'>
              {/* <Button /> */}
              <button onClick={() => removeBasketItem(p)}>remove basket</button>
              <button onClick={() => increaseBasketCount(p)}>+</button>
              <button onClick={() => decreaseBasketCount(p)}>-</button>
            </div>
          </Col>
        ))}
      </Row>

    </section>
  )
}

export default Basket