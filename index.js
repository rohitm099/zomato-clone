// importing the packages
const express = require('express')
const bodyparser = require('body-parser')
const mongodb = require('mongodb')
const cors = require("cors")

//declaring the express app
const app = express()

//Mongodb Confriguration
const { MongoClient } = mongodb
const uri = "mongodb+srv://m001-student:m001-password@server967.eltku.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

//Middlewares
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json())

const port = 5000
const dbName = "zomato"
const collectionName = "users"

const main = async () => {
    try {

        await client.connect()
        console.log("Database is Connecte")

        const db = client.db(dbName)
        const collection = db.collection(collectionName)
        app.get("/", (req, res) => {
            res.send("server is live!")
        })


        //Post
        //Login
        app.post("/login", async (req, res) => {
            //Fetch the data from the request
            console.log(req)
            let email = req.body.email
            let password = req.body.password
            console.log("Requested Data:", req.body)

            //Check the email and password values in my database
            let result = await collection.findOne({ email: email })
            console.log("the data from database", result)

            if (result === null) {
                res.json({ "message": "Email is not Registered" })
                return
            }
            if (result.password !== password) {
                res.json({ "message": "credential is not valid" })
                return
            }
            //send the respone login success otherwise credintails are not valid
            res.send({ "message": "welcome to zomato" })
        })

        //register
        app.post("/register", async (req, res) => {
            try {
                const username = req.body.username
                const email = req.body.email
                const password = req.body.password

                console.log("The Request Data:", req.body)

                //checking the user is already registere or not
                const feedback = await collection.findOne({ email: email })

                if (feedback !== null) {
                    res.json({ "message": "email is already registered" })
                    return
                }

                //insert the data in the database
                const result = await collection.insertOne({
                    username: username,
                    email: email,
                    password: password
                })

                console.log(result)

                console.log("The feedback i get from database: ", result);
                // if the data is inserted we will send a response
                // data add successfully otherwise
                // something went wrong
                res.json({ message: "User Created Successfully!" });

            } catch (e) {
                console.log("Error in the register route:", e)
            }
        })

        app.listen(port, () => {
            console.log("Server running on http://localhost:${port}")
        })
    } catch (e) {
        //error handling
        console.log("Error occured:", e)
    }
}

main()
