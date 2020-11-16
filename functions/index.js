const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HesAHHA1IAmnFO8fANPGHdcbiMhKPSRQ1QrsYD8D5ojgxRHi6Ho1L4xIouH0eUEQLukni8DWosf8keVmNpFERBk00LNZT9NRB')

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send ('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved for this amount', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Ejemplo de endpoint
// http://localhost:5001/clone-d4bf6/us-central1/api