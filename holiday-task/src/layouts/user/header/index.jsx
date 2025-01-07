import React from 'react'
import { Link } from 'react-router-dom'

const HeaderC = () => {
  return (
    <header>
        <h1>Selling.</h1>
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Favorites">
                        Favorites
                    </Link>
                </li>
                <li>
                    <Link to="/Basket">
                        Basket
                    </Link>
                </li>
                <li>
                    <Link to="/Products">
                        Products
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default HeaderC