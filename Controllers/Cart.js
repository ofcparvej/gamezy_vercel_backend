const User = require("../model/User");

//add cart
exports.addItem = async (req, res) => {
  let id = req.params.id;

  try {
    const user = await User.findOne({ _id: id });

    const cart = req.body;
    user.cart.push(cart);
    await user.save();

    res.status(200).json({ msg: "product added to the cart", user: user });
    //     }
  } catch (err) {
    //     // res.status(404).json("error",err);
    //     // const statusCode = err ? err.status || 500 : 200;
    res
      .status(400)
      .json({ message: "product does not added in the cart", err: err });
  }
};

// remove fromcart
exports.removeItem = async (req, res) => {
  try {
    const userId = req.params.userId;
    const cartItemId = req.params.cartItemId;

    const user = await User.findById({ _id: userId });
    if (!user) {
      return res.status(400).json({ msg: "User Not Found" });
    }

    const itemIndex = user.cart.findIndex((item) => item._id == cartItemId);

    if (itemIndex === -1)
      return res.status(400).json({ msg: "Item Not Found" });

    user.cart.splice(itemIndex, 1);
    await user.save();
    return res.status(200).json({ user_cart: user.cart });
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

exports.getCart = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).json({
      success: true,
      message: "user is",
      user,
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

//Increase quantity
exports.increaseItem = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json("User Not Found");
    }

    const itemId = req.params.itemId;

    const item = user.cart.find((item) => item.id == itemId);

    if (!item) {
      return res.status(404).json("Item not found in users cart");
    }

    item.quantity += 1;
    await user.save();

    res.status(200).json({
      message: "quantity increased",
    });
  } catch {
    res.status(404).json(err);
  }
};

//decrease by one
exports.decreaseItem = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);

    if (!user) {
      return res.status(404).json("User Not Found");
    }

    const itemId = req.params.itemId;

    const item = user.cart.find((item) => item.id == itemId);

    if (!item) {
      return res.status(404).json("Item not found in users cart");
    }

    if (item.quantity >= 1) item.quantity -= 1;
    await user.save();

    res.status(200).json({
      message: "quantity decreased",
    });
  } catch {
    res.status(404).json(err);
  }
};
//empty cart
exports.emptyCart = async (req, res) => {
  try {
    let id = req.params.userId;
    const user = await User.findById({ _id: id });

    if (!user) {
      return res.status(404).json({ msg: "User Not Found" });
    }

    user.cart = [];
    await user.save();

    res.status(200).json({
      message: "cart is empty now",
    });
  } catch (err) {
    res.status(404).json(err);
  }
};
