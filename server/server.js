const express = require("express");
const app = express();
const multer = require('multer');
const cors = require("cors");
const pool = require ("./db")
const estimationRoutes = require('./routes/estimation');
const Auth = require('./routes/authRoutes');
const adminRoutes = require('./routes/admin');
const alert = require('./routes/deliveryRoutes');
const jwt = require('jsonwebtoken');
//----------------middleware ---------------------------------------------------//
app.use(cors());
app.use(express.json()); //req.body
app.options('*', cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Allow requests from all origins
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'GET,PATCH ,OPTIONS, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});
const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(403).json({ message: 'Token not provided' });
  }
  const secretKey = generateSecretKey();
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.userId = decoded.userId; // Access the decoded user ID
    next();
  });
};


module.exports = { verifyToken };


//-----------------------ROUTES---------------------------------------------//
app.use('/api', estimationRoutes); 
app.use('/admin', adminRoutes); 
app.use('/alert', alert); 

app.use('/Auth', Auth); 


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Folder where the uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // File name in the folder
  },
});

// Test the database connection
pool.connect()
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Error connecting to the database', err));

app.listen(4000, () => {
  console.log("server has started on port 4000");
});
