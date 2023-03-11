const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await 
    mongoose.set('strictQuery', true)
    mongoose.connect('mongodb+srv://karen:contrase%C3%B1a@cluster0.bko6piz.mongodb.net/API-south-park', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log('Error connecting to MongoDB:', error.message);
  }
};

module.exports = connectDB;