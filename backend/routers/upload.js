const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');

// Import your schema
const Admin = require('../db/admin-schema');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString().replace(/:/g, '-') + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).single('file'); // Corrected to .single('file')

router.post('/upload-article', (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error('Error uploading file:', err);
      return res.status(500).send({ message: 'Error uploading file' });
    }

    if (!req.file) {
      console.error('No file received');
      return res.status(400).send({ message: 'No file received' });
    }

    const { title, excerpt, author, publicationDate } = req.body;
    const filePath = req.file.path; // Get the file path

    const newAdmin = new Admin({
      title,
      excerpt,
      author,
      PublicationDate: publicationDate,
      filePath // Save the file path
    });

    try {
      await newAdmin.save();
      res.send({ message: 'Article uploaded successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).send({ message: 'Error uploading article' });
    }
  });
});

module.exports = router;
