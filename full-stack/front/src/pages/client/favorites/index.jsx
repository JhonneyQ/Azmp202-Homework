import React, { useContext, useEffect, useState } from 'react'
import { Fcontext } from '../../../components/context'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import axios from "axios"
import { Link } from 'react-router-dom';

const Favorites = () => {

  const { toggleFav, favorites } = useContext(Fcontext)
  const [cards, setCards] = useState([])

  const getAllData = async () => {
    try {
      const res = await axios("http://localhost:8000/api/data")
      setCards(res.data.data)
    } catch (error) {
      console.log(error);

    }
  }


  useEffect(() => {
    getAllData()


  }, [])

  return (
    <div className='cards'>
      {favorites && favorites.map((p) => {
        return (
          <div key={p._id}>
            <h3>{p.title}</h3>
            <h4>{p.description}</h4>
            <p>{p.lor}</p>
            <button onClick={() => toggleFav(p)}>
              {cards.find((q) => q._id === p._id) ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default Favorites