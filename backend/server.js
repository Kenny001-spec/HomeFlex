const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const path = require('path');
const properties = require("./routes/properties");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

let propertyStatus = {};
let buyPropertyStatus = {};

app.get('/api/properties', (req, res) => {
  res.json(propertyStatus);
});

app.post('/api/propertyStatus', (req, res) => {
  propertyStatus = req.body;
  res.status(200).json({ message: 'Property updated successfully' });
});

app.get('/api/buyPropertyStatus', (req, res) => {
  res.json(buyPropertyStatus);
});

app.post('/api/buyPropertyStatus', (req, res) => {
  buyPropertyStatus = req.body;
  res.status(200).json({ message: 'Property status updated successfully' });
});

app.use("/properties", properties);

const MONGO_URI = 'mongodb+srv://soliuahmad99:soliu1234@cluster0.suswr9x.mongodb.net/realasset';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(async () => {
  console.log('MongoDB connected');

  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch(err => console.error(err));


