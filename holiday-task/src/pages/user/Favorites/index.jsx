import React, { useContext } from 'react'
import { FavoritesContext } from '../../../context/favorite'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Favorites = () => {


  const { favorites, toggleFavorites } = useContext(FavoritesContext)


  return (
    <>
      <Helmet>
        <title>Favorites page</title>
      </Helmet>
      <section className='sec3'>
        <Row className='cards'>
          {favorites.map((p) => (
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
            </Col>
          ))}
        </Row>

      </section>
    </>
  )
}

export default Favorites