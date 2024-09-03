const mongoose = require('mongoose');

const ParticipantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  linkedin: {
    type: String,
    default: 'Did not fill',
    required: false
  },
  instagram: {
    type: String,
    default: 'Did not fill',
    required: false
  },
}, { timestamps: true });

const Participant = mongoose.model('Participant', ParticipantSchema);

module.exports = Participant;