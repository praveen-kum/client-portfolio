const express = require('express');
require('../db')
const multer =require('multer')
const mongoose =require('mongoose')
const fs = require('fs');
const path = require('path');

let Resume =require('../Model/resume');

  const res =express.Router()
  const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const pdfSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
  });
  
  const PdfModel = mongoose.model('Pdf', pdfSchema);
  
  res.post('/', upload.single('file'), async (req, res)=>{
    try {
        const newPdf = new PdfModel({
            name: req.file.originalname,
            data: req.file.buffer,
          });
        await newPdf.save();
        res.status(201).send('File uploaded successfully');
      } catch (error) {
        console.error('Error saving file to MongoDB:', error);
        res.status(500).send('Internal Server Error');
      }
})


res.get('/:id', async (req, res) => {
    const pdfId = req.params.id;
    try {
      const pdf = await PdfModel.findById(pdfId).exec();
  
      if (!pdf) {
        return res.status(404).send('PDF not found');
      }
  
    
      res.setHeader('Content-Type', 'application/pdf');
      res.send(pdf.data);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });

  // PUT endpoint for updating PDF
res.put('/:id', upload.single('pdf'), async (req, res) => {
    const pdfId = req.params.id;
  
    try {
      const pdf = await PdfModel.findOne({ _id: pdfId });

      if (!pdf) {
        return res.status(404).send('PDF not found');
      }
      // Update the PDF data if a new file is provided
      if (req.file) {
        pdf.name = req.file.originalname;
        pdf.data = req.file.buffer;
  
        await pdf.save();
        return res.status(200).send('PDF updated successfully!');
      } else {
        return res.status(400).send('No file provided for update');
      }
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  

module.exports=res;
