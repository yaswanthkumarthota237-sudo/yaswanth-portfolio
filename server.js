require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const projectRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');
const Project = require('./models/Project');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/projects', projectRoutes);
app.use('/api/contact', contactRoutes);

const seedProjects = [
  { index: 'MODEL / 01', title: 'AI-Based Student Performance Prediction System', description: 'A machine learning system that analyzes student data to predict academic performance and flag areas needing support.', order: 1 },
  { index: 'AGENT / 02', title: 'Agentic AI Workshop Project', description: 'A hands-on project built during an Agentic AI workshop, exploring autonomous, goal-driven AI agents and their workflows.', order: 2 },
  { index: 'VISION / 03', title: 'Face Recognition Attendance System', description: 'A computer-vision based attendance tool that identifies and logs individuals automatically, replacing manual roll calls.', order: 3 },
  { index: 'WEB / 04', title: 'Yaswanth Portfolio', description: 'A full-stack personal portfolio website built with HTML, CSS and JavaScript on the frontend, and Node.js, Express and MongoDB on the backend, deployed live to showcase projects and skills.', order: 4 }
];

mongoose.connect(process.env.MONGODB_URI)
  .then(async () => {
    console.log('MongoDB connected');
    const count = await Project.countDocuments();
    if (count === 0) {
      await Project.insertMany(seedProjects);
      console.log('Projects auto-seeded!');
    }
  })
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
