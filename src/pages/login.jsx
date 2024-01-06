import React, { useState } from "react";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = async (e) => {
        try {
            //prevent page from reloading
            e.preventDefault()

            console.log(email, password)

            const response = await axios("http://localhost:5000/login", {
                method: "POST",
                header: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "email": email,
                    "password": password
                }
            })

            console.log("Response:", response)
            setMessage(response.data.message)

        } catch (e) {
            //Error Handling
            console.log("Error Occured while form submitting:", e)
        }

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <legend>{message}</legend>
                <div>
                    <input
                        type="email"
                        value={email}
                        placeholder="email"
                        required name="email"
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <input
                        type="password"
                        value={password}
                        placeholder="password"
                        required name="password"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </>
    )
}

export default Login