import React from 'react'
import { Link } from 'react-router-dom'

const HeaderA = () => {
  return (
    <header>
        <section>
            <nav>
                <ul>
                    <li>
                        <Link to="/admin">
                            admin
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/add">
                            add
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    </header>
  )
}

export default HeaderA