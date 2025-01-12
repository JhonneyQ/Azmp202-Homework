import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Fcontext } from '../../../components/context'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Home = () => {

    const [cards, setCards] = useState([])
    const { toggleFav, favorites } = useContext(Fcontext)


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
        <main>
            <section className='sec1'>
                <div className='par'>
                    <h2>Requirements to be Immigrants</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className='cards'>
                    {cards && cards.map((p) => {
                        return (
                            <div key={p._id}>
                                <h3>{p.title}</h3>
                                <h4>{p.description}</h4>
                                <p>{p.lor}</p>
                                <button onClick={() => toggleFav(p)}>
                                    {favorites.find((q) => q._id === p._id) ? <FaHeart /> : <FaRegHeart />}
                                </button>
                                <Link to={`details/${p._id}`}>Details</Link>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Home