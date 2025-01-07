import React, { useContext, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Button from '../../../components/button';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import "./pro.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoritesContext } from '../../../context/favorite';
import BasketProvider, { BasketContext } from '../../../context/basket';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Products = () => {


    const [cards, setCards] = useState([])
    const { toggleFavorites, favorites } = useContext(FavoritesContext)
    const { addToBasket } = useContext(BasketContext)

    const getAllData = async () => {
        try {
            const res = await axios("http://localhost:3000/categories")
            setCards(res.data)

        } catch (error) {
            console.log(error);

        }
    }

    useEffect(() => {
        getAllData()

    }, [])





    return (
        <>

        <Helmet>
            <title>Products Page</title>
        </Helmet>

            <section className='sec2'>
                <div className='par'>
                    <h1>Our Products</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut eveniet aut consequatur laboriosam ipsam.</p>
                </div>
                <Row className='cards'>
                    {cards.map((p) => (
                        <Col xs={4} className='card' key={p.id}>
                            <img src={p.image} />
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <div className='action'>
                                {/* <Button /> */}
                                <button onClick={() => toggleFavorites(p)}>
                                    {favorites.find((q) => q.id === p.id) ? <FaHeart /> : <FaRegHeart />}
                                </button>
                            </div>
                            <button onClick={() => addToBasket(p)}>add basket</button>
                            <Link to={`${p.id}`}>{p.title}</Link>

                        </Col>
                    ))}
                </Row>

            </section>
        </>
    )
}

export default Products