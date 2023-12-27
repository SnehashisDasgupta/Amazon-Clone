const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51OJcS4SA37fBPmSu0OxWLMeB6w4sda7M2hX6AwN0pvcg8O4XmwOs6b1yNABylJT29Y8x99aQgmfFVW31Wb9tdyzn00ojCtv5hJ"
);

// API

// -App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received >>> ", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// -Listen command
exports.api = functions.https.onRequest(app);

/* 
Example endpoint
http://127.0.0.1:5001/clone-1f3cb/us-central1/api
*/
