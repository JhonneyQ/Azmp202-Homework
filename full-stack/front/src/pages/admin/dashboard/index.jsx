import React, { useContext, useEffect, useState } from 'react'
import axios from "axios"
import { Fcontext } from '../../../components/context'

const Dashboard = () => {

    const [cards, setCards] = useState([])
  
    const getAllData = async () => {
        try {
            const res = await axios("http://localhost:8000/api/data")
            setCards(res.data.data)
        } catch (error) {
            console.log(error);

        }
    }
    const deleteData = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/data/${id}`)
            getAllData()
        } catch (error) {
            console.log(error);

        }
    }


    useEffect(() => {
        getAllData()


    }, [])






    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>lor</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {cards && cards.map((p) => (
                        <tr key={p._id}>
                            <td>{p._id}</td>
                            <td>{p.title}</td>
                            <td>{p.description}</td>
                            <td>{p.lor}</td>
                            <td><button onClick={() => deleteData(p._id)}>delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Dashboard