import React, { useState } from "react";
import axios from "axios";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        try {
            //prevent page from reloading
            e.preventDefault()

            console.log(email, password)

            const response = await axios("https://zomato-clone-three-blush.vercel.app/register", {
                method: "POST",
                header: {
                    'Content-Type': 'application/json'
                },
                data: {
                    "username": username,
                    "email": email,
                    "password": password
                }
            })

            console.log("Response:", response)
            setMessage(response.data.message)

            // for reset the details
            setUsername("");
            setEmail("");
            setPassword("")
        } catch (e) {
            //Error Handling
            console.log("Error Occured while form submitting:", e)
        }

    }

    return (
        <div className=" flex justify-center p-3 h-screen items-center">
            <form onSubmit={handleSubmit} className=" p-3 shadow-lg">
                <h1>Sign Up</h1>
                <legend>{message}</legend>
                <div className="p-2">
                    <input
                        className="w-64 p-2 border border-solid border-slate-300 rounded-lg focus:outline-2 focus:outline focus:outline-green-100"
                        type="emtextail"
                        value={username}
                        placeholder="username"
                        required name="username"
                        onChange={e => setUsername(e.target.value)} />
                </div>
                <div className="p-2">
                    <input
                        className="w-64 p-2 border border-solid border-slate-300 rounded-lg focus:outline-2 focus:outline focus:outline-green-100"
                        type="email"
                        value={email}
                        placeholder="email"
                        required name="email"
                        onChange={e => setEmail(e.target.value)} />
                </div>
                <div className="p-2">
                    <input
                        className="w-64 p-2 border border-solid border-slate-300 rounded-lg focus:outline-2 focus:outline focus:outline-green-100"
                        type="password"
                        value={password}
                        placeholder="password"
                        required name="password"
                        onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="p-2">
                    <button className="brand w-64 p-2 text-white" type="submit">Register</button>
                </div>
                <div className="p-2">
                    <button className="w-64 p-2 text-black" type="submit">Continue With Google</button>
                </div>
            </form>
        </div>
    )
}

export default Register