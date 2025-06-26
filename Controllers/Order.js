
const User = require("../model/User");

exports.addOrder = async (req, res) => {
  console.log("ADD ORDER -----==========> ", req.body);
  try {
    let id = req.params.id;
    const user = await User.findOne({ _id: id });

    if (!user) {
      return res.status(404).json("User Not Found");
    } else {
      const order = req.body;
      if (!user.orders) {
        user.orders = [];
      }
      user.orders.push(order);
      await user.save();
      res.status(200).json("The product has been added to Orders");
    }
  } catch (err) {
    res.status(400).json(err);
  }
};

exports.getAllOrders = async (req, res) => {
  let id = req.params.id;
  try {
    const user = await User.findOne({ _id: id });

    res.status(200).json(user.orders);
  } catch (err) {
    res.status(400).json(err);
  }
};
