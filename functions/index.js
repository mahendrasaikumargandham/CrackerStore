const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51IBzz3CCd7GXDkwRegdiJkZwAVDSrXX0kIsYnU027wsQ20A2HyhKH91RY114bnjB7bmVSBcRTs3FnBXTFUrrSxL400Qa4WLhPC");


const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("mahendra gandham"));
app.post("/payments/create", async (request, response)  => {
    const total = request.query.total;
  
    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, 
      currency: "usd",
    });
    response.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
  });


exports.api = functions.https.onRequest(app);