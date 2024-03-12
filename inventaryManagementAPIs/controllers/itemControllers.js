const Item = require("../models/items");

exports.getItemById = async (req, res) => {
  try {
    // console.log(req);
    const itemId = req.params.itemId;
    const item = await Item.findOne({where: {id: itemId}});
    console.log(item);
    res.json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "intenal server error" });
  }
};
exports.getItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    console.log(items);
    res.json(items);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "intenal server error" });
  }
};

exports.postAddItem = async (req, res) => {
  try {
    const itemName = req.body.itemName;
    const description = req.body.description;
    const price = req.body.price;
    const quantity = req.body.quantity;
    const item = await Item.create({
      itemName: itemName,
      description: description,
      price: price,
      quantity: quantity,
    });
    res.status(201).json(item);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "internal server error"})
  }
};

exports.upadeItemById =async(req, res)=>{
  try {
  const itemName = req.body.itemName;
  const description = req.body.description;
  const price = req.body.price;
  const quantity = req.body.quantity;
    // console.log(req.body);
  const updatedItem = {
    itemName,
    description,
    price,
    quantity
  }

    const itemId = req.params.itemId;
    const result = await Item.update(updatedItem,{where: {id: itemId}});
    res.send(result);

  } catch (error) {
    console.log(error);
    res.status(500).json({message: "internal server error"})
  }
}