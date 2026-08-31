// Run this ONCE (npm run seed) after MONGODB_URI is set, to load the
// starting project data into your database. You can edit the array
// below any time and re-run it if you want to change/add projects.

require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');

const projects = [
  {
    index: 'MODEL / 01',
    title: 'AI-Based Student Performance Prediction System',
    description: 'A machine learning system that analyzes student data to predict academic performance and flag areas needing support.',
    order: 1
  },
  {
    index: 'AGENT / 02',
    title: 'Agentic AI Workshop Project',
    description: 'A hands-on project built during an Agentic AI workshop, exploring autonomous, goal-driven AI agents and their workflows.',
    order: 2
  },
  {
    index: 'VISION / 03',
    title: 'Face Recognition Attendance System',
    description: 'A computer-vision based attendance tool that identifies and logs individuals automatically, replacing manual roll calls.',
    order: 3
  },
  {
    index: 'WEB / 04',
    title: 'Yaswanth Portfolio',
    description: 'A full-stack personal portfolio website built with HTML, CSS and JavaScript on the frontend, and Node.js, Express and MongoDB on the backend, deployed live to showcase projects and skills.',
    order: 4
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    await Project.deleteMany({});
    await Project.insertMany(projects);
    console.log('Projects seeded successfully!');
  } catch (err) {
    console.error('Seeding failed:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
