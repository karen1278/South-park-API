const Character = require("../database/model");

exports.getAllCharacters = async (req, res) => {
  try {
    const characters = await Character.find();
    res.json(characters);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching characters");
  }
};

exports.createNewCharacter = async (req, res) => {
    try {
      const characterData = req.body;
      const character = await Character.create(characterData);
      res.json(character);
    } catch (err) {
      console.error(err);
      res.status(500).send("Error creating character");
    }
  };

exports.getOneCharacter = async (req, res) => {
  try {
    const character = await Character.findById(req.params.id);
    res.json(character);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error fetching character");
  }
};

exports.updateOneCharacter = async (req, res) => {
  try {
    const character = await Character.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(character);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating character");
  }
};

exports.deleteOneCharacter = async (req, res) => {
  try {
    await Character.findOneAndRemove({ _id: req.params.id });
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting character");
  }
};