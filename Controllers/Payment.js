const stripe = require("stripe")(process.env.STRIPE_SECRET);

exports.payment = async (req, res) => {
  try {
    const { products } = req.body;

    const lineItems = products.map((product) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: product.name,
        },         
        unit_amount: 10000,
      },
      quantity: product.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "gamezy-vercel-frontend.vercel.app/",
      cancel_url: "gamezy-vercel-frontend.vercel.app/",
    });
    res.status(200).json({ id: session.id });
  } catch (err) {
    res.status(500).json(err);
  }
};

// http://localhost:3000/cart
// /*((product.price * 100)+((product.price * 100)*0.05))*/Math.round(product.price*100),
