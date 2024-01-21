import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RNavbar from "../components/RNavbar";


const URI = "http://localhost:5000"

const Restaurant = () => {
    const params = useParams()
    const [result, setResult] = useState(undefined)
    const [card, setCard] = useState([])

    console.log(params)

    const searchRestaurant = async (data) => {
        try {
            const res = await axios(`http://localhost:5000/restaurants/${data}`)

            console.log("The Response:", res)

            setResult(res.data[0])
        } catch (e) {
            console.log("Error while Searching the doc", e)
        }
    };

    useEffect(() => {
        searchRestaurant(params.restaurantName)
    }, [])

    if (!result) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div className="container">
            <RNavbar />
            <div className="gallerycontainer">
                <img src={result.imgdata} alt="" />
                <img src={result.imgdata} alt="" />
                <img src={result.imgdata} alt="" />
                <img src={result.imgdata} alt="" />
            </div>
            <div>
                <h1 className="text-lg ">{result.rname}</h1>
                <h3>Pizza Pasta, Italian Fast Food</h3>
                <h4>Chandigarh</h4>
                <h4>{card.length}</h4>
            </div>

            <div>
                <h2>Menu</h2>
                <ul>
                    {result.menu.map((item, index) => (
                        <li className="flex justify-between p-3 shadow-lg">
                            <div>{item.dishName}</div>
                            <div>{item.price}</div>
                            <button type="button" onClick={() => {
                                setCard([...card, result.menu[index]])
                            }}>Add</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Restaurant