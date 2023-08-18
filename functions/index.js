/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('pk_test_51N9AcUSIOdLB3331KtKNI9jQFJmuIenczIyxsxHVIDxRRr2IrfYi2YFNRkcJDbWuOq4ZOchChDxUjjKaBV1fdOGa006kSwIzuZ')

const logger = require("firebase-functions/logger");
const { app } = require("firebase-admin");
const { response } = require("express");

//API

// App config
const App = express();

//Middlewares
app.use(cors({origin: true}))
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send('hello'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log('Payment received', total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd',
    })
    response.status(201).send({
        clientSecret: paymentIntent.client_Secret,
    })
}

)

//listen command
exports.api = functions.https.onRequest(app)


// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
