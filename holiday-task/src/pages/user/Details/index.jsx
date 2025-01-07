import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import { useParams } from 'react-router-dom';

const Details = () => {
  const [cards, setCards] = useState([])
  const {id} = useParams()

  const getAllData = async () => {
    try {
      const res = await axios(`http://localhost:3000/categories/${id}`)
      setCards(res.data)
  
      
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {


    getAllData()


  }, [])
  





  return (
    <section className='sec2'>
      <Row className='cards'>

        <Col xs={4} className='card' key={cards.id}>
          <img src={cards.image} />
          <h3>{cards.title}</h3>
          <p>{cards.description}</p>
        </Col>

      </Row>

    </section>
  )
}

export default Details