// All require code
const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

// Get API
// on serverside
app.get("/services", async (req, res) => {
  const query = {};
  const cursor = databaseName.find(query);
  const services = await cursor.toArray();
  res.send(services);
});
// on client side
useEffect(() => {
  fetch("http://localhost:5000/services")
    .then((res) => res.json())
    .then((data) => setServices(data));
}, []);
//   on Serverside
app.get("/services/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const service = await databaseName.findOne(query);
  res.send(service);
});
// on client side
const { serviceId } = useParams();
useEffect(() => {
  const url = `http://localhost:5000/services/${serviceId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => setService(data));
}, []);

// Post API
// on Serverside
app.post("/service", async (req, res) => {
  const newService = req.body;
  const result = await databaseName.insertOne(newService);
  res.send(result);
});

// On client side
fetch("http://localhost:5000/service", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });

// Delete API
// on Serverside
app.delete("/service/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: ObjectId(id) };
  const result = await serviceCollection.deleteOne(query);
  res.send(result);
});

// On client side
fetch(`http://localhost:5000/service/${id}`, {
  method: "DELETE",
})
  .then((res) => res.json())
  .then((data) => {
    const remaining = services.filter((service) => service._id != id);
    setServices(remaining);
  });

/* Herouku
One Time for your computer
 01. Create Herouku account (One Time).
 02. Verify Email.
 03. Install herouku CLI.
 04. herouku login

 for each projects
 01. herouku create
 
 */
