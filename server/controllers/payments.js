const stripe = require("stripe")(process.env.STRIPE_SECRET)

const pay = async (req, res, next) => {
    console.log(req.body.token);
    const { token, amount } = req.body
    const idempotencyKey = uuidv4();

    return stripe.customers.create({
        email: token.email,
        source: token
    }).then(customer => {
        stripe.charges.create({
            amount: amount * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email
        },{idempotencyKey})
    }).then(result => {
        res.status(200).json(result)
    }).catch(err =>{
        console.log(err);
    })
}

module.exports = { pay }