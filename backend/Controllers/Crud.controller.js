const { model } = require("mongoose");

const post = (model) => async (req, res) => {
  try {
    const item = await model.create(req.body);
    return res.status(201).send(item);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const getAll = (model) => async (req, res) => {
  try {
    const items = await model.find().lean().exec();
    return res.status(200).send(items);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id).lean();
    return res.status(200).send(item);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const updateOne = (model) => async (req, res) => {
  try {
    const item = await model
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean();
    return res.status(205).send(item);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const deleteOne = (model, itemName) => async (req, res) => {
  try {
    const item = await model.findByIdAndDelete(req.params.id).lean();
    return res.status(205).json({ [itemName]: item });
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = (model, itemName) => ({
  post: post(model),
  get: getAll(model),
  getOne: getOne(model),
  updateOne: updateOne(model),
  deleteOne: deleteOne(model, itemName),
});
