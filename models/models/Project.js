const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  index: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  order: { type: Number, default: 0 }
});

module.exports = mongoose.model('Project', projectSchema);
