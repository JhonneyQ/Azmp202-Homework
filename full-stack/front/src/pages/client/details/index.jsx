import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from "axios"

const Details = () => {


  const { id } = useParams()
  const [cards, setCards] = useState([])



  const getAllData = async () => {
    try {
      const res = await axios(`http://localhost:8000/api/data/${id}`)
      setCards(res.data.data)
    } catch (error) {
      console.log(error);

    }

  }




  useEffect(() => {
    getAllData()


  }, [])




  return (

    <div key={cards._id}>
      <h3>{cards.title}</h3>
      <h4>{cards.description}</h4>
      <p>{cards.lor}</p>
    </div>

  )
}

export default Details