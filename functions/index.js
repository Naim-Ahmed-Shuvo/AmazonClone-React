const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HO31QCDdOUElv2jUbvO51Qoe9ATSk3UIlUnhQpnARoQpU9NdiPWBIxctIb1VZES61yGlYeMLlZpgHP3I4qK0cuE00AQLoR6vd"
);

// API Config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Api Routes
app.get("/", (req, res) => {
  return res.status(200).send("Hello World !");
});

app.post("/payment/create", async (req, res) => {
  // const total = req.query.total;
  const total = req.query.total;
  console.log("total: " + total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  res.status(201).send({
      clientSecret: paymentIntent.client_secret
  });
});

// Listen
exports.api = functions.https.onRequest(app);
