// routes/insertRoutes.js
const express = require('express');
const Controller = require('../controllers/estimation');
const router = express.Router();
const fs = require('fs');

var path = require('path');
const bodyParser = require('body-parser');
// Increase the maximum payload size to 50 MB (adjust as needed)
router.use(bodyParser.json({ limit: '50mb' }));
router.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const multer = require('multer');
const storeDataInLocals = (req, res, next) => {
  // Store the necessary data in res.locals
  res.locals.dataFromFirstRoute = req.body;
  next();
};



// Set up the storage location for uploaded files
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      // Replace '/path/to/your/storage/' with the desired path on your server
      cb(null, 'EstimationFolder/');
    },
    filename: function (req, file, cb) {
      const originalname = file.originalname;
      const extension = originalname.split('.').pop(); // Get the file extension
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      const modifiedFilename = originalname.replace(/\.[^/.]+$/, "") + '-' + uniqueSuffix + '.' + extension;
      cb(null, modifiedFilename);
    },
  });
  const upload = multer({ storage: storage });
  // Shared variable to store the filePath data temporarily
  
  
  router.post("/upload", storeDataInLocals, upload.single('bonScanner'), (req, res) => {
    console.log('File received:', req.file);
  
    // Get the path of the uploaded file on the server
    const filePath = req.file.path;
    console.log('File path on the server:', filePath);
  

    // Store the filePath in the shared variable
    global.filePath = filePath;
    //console.log(' global.filePath1111',  global.filePath);
    // Add your file-saving logic here, if needed
    // For example, you can save the file content to a database or perform additional processing.

  
    res.json({ success: true, message: 'File uploaded and saved successfully.' });
  });
  

  router.post('/insertData', (req, res) => {
    const filePath = global.filePath || ''; // Set a default value if filePath is not yet defined
    req.body.filePath = filePath; // Add filePath to the request body
    console.log('File path on the server22:',  req.body.filePath);
    Controller.insertData(req, res); // Call the controller function with updated request
  });



  router.get('/getEstimationByState/:state', async (req, res) => {
    try {
      const state = req.params.state;
      const estimations = await Controller.getEstimationsByState(state);
      res.status(200).json({ estimations });
    } catch (error) {
      // Handle errors appropriately
      console.error('Error getting estimations by state:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  
  router.put("/SortieData", Controller.modifierSortie);
  router.put("/OuvertureData", Controller.modifierOuverture);

module.exports = router;
