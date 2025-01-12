import React from 'react'
import { Link } from 'react-router-dom'

const HeaderC = () => {
  return (
    <header>
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/details">
                            details
                        </Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            favorites
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
  )
}

export default HeaderC