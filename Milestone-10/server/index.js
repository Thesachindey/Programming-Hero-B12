const express = require('express')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

//Mongo DB
const uri = "mongodb+srv://model-db:nDxqBLrfEZsf4Cdm@cluster0.6fqewb1.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();


        const db = client.db('model-db')
        const modelCollection = db.collection('models')

        // Get Method
        // find 
        // findOne

        app.get('/models', async (req, res) => {

            const result = await modelCollection.find().toArray() //promise
            // console.log(result)
            res.send(result)
        })


        // models details dekbo,tai akta data get korbo by [findOne()] method

        app.get('/models/:id', async (req, res) => {
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
            const data= req.body
            // console.log(id)
            // console.log(data)
            const objectId = new ObjectId(id)
            const filter={_id: objectId}
            const update={
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
    const {id}=req.params
    const objectId =new ObjectId(id)
    const filter ={_id: objectId}
    const result = await modelCollection.deleteOne(filter)

    res.send({
        success:true,
        result
    })
    
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
    res.send('Hello Shaurov!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
