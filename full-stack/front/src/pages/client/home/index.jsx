import React, { useEffect, useState } from 'react'
import axios from "axios"

const Home = () => {

    const [cards, setCards] = useState([])


    const getAllData = async () => {
        const res = await axios("http://localhost:8000/api/data")
        setCards(res.data.data)
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
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}

export default Home