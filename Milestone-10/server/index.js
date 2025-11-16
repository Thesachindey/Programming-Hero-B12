const express = require('express')
const cors = require('cors')
const admin = require("firebase-admin");
require("dotenv").config()
const serviceAccount = require("./serviceKey.json");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())


//for authentication
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// model-db:nDxqBLrfEZsf4Cdm
// console.log(process.env.DB_PASSWORD)
//Mongo DB
const uri
    = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.6fqewb1.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

//middleware
const middleware = async (req, res, next) => {
    const authorization = req.headers.authorization
    if (!authorization) {
        return res.status(401).send({
            massage: 'unauthorized access. Token not found!'
        })
    }
    const token = authorization.split(' ')[1]
    try {
        await admin.auth().verifyIdToken(token)
        next()
    } catch (error) {
        res.status(401).send({
            message: "Unauthorized access."
        })
    }


}

// all METHODS
async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();


        const db = client.db('model-db')
        const modelCollection = db.collection('models')
        const downloadCollection = db.collection('downloads')

        // Get Method
        // find 
        // findOne

        app.get('/models', async (req, res) => {

            const result = await modelCollection.find().toArray() //promise
            // console.log(result)
            res.send(result)
        })


        // models details dekbo,tai akta data get korbo by [findOne()] method

        //    { (req, res, next) => {
        //     console.log(`I'm from middleware!`);
        //     next()
        // }} this middleware clint side ar server ar middle e bose

        app.get('/models/:id', middleware, async (req, res) => {
            //clint side hote ja asbe ta req te thakbe
            const { id } = req.params
            console.log(id)
            // id sorasori pass korty pari na karon ayta mDB te ObjectId hisebe acy, ay khane acy string
            const objectId = new ObjectId(id)
            const result = await modelCollection.findOne({ _id: objectId })

            res.send({
                success: true,
                result
            })
        })



        // Post method
        // insertOne
        // insertMany

        app.post('/models', async (req, res) => {
            const data = req.body
            console.log(data);

            const result = await modelCollection.insertOne(data)
            res.send({
                success: true,
                result
            })
        })


        // PUT method 
        // updateOne, updateMany

        app.put('/models/:id', async (req, res) => {
            const { id } = req.params
            const data = req.body
            // console.log(id)
            // console.log(data)
            const objectId = new ObjectId(id)
            const filter = { _id: objectId }
            const update = {
                $set: data
            }

            const result = await modelCollection.updateOne(filter, update)

            res.send({
                success: true,
                result
            })
        })


        // Delete 
        // deleteOne
        // deleteMany

        app.delete('/models/:id', async (req, res) => {
            const { id } = req.params
            const objectId = new ObjectId(id)
            const filter = { _id: objectId }
            const result = await modelCollection.deleteOne(filter)

            res.send({
                success: true,
                result
            })

        })



        // sort latest 6 data 
        // get method
        // find 

        app.get('/latest-models', async (req, res) => {
            const result = await modelCollection.find().sort({ created_at: 'desc' }).limit(6).toArray()

            console.log(result)

            res.send(result)
        })



        // my model page api endpoint making 
        app.get('/my-models', middleware, async (req, res) => {
            const email = req.query.email
            const result = await modelCollection.find({ created_by: email }).toArray()

            res.send(result)
        })


        // downloads collection rakhbo tai api toiri korlam
        app.post('/downloads/:id', async (req, res) => {
            const data = req.body
            const id = req.params.id
            //downloads collection...
            const result = await downloadCollection.insertOne(data)

            //download counted...
            const filter = { _id: new ObjectId(id) }
            const update = {
                $inc: {
                    downloads: 1
                }
            }
            const downloadCounted = await modelCollection.updateOne(filter, update)
            res.send({ result, downloadCounted })
        })

        app.get('/my-downloads', middleware, async (req, res) => {
            const email = req.query.email
            const result = await downloadCollection.find({ downloaded_by: email }).toArray()
            res.send(result)
        })

        app.get("/search", async (req, res) => {
            const search_text = req.query.search
            const result = await modelCollection.find({ name: { $regex: search_text, $options: "i" } }).toArray()
            res.send(result)
        })




        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
