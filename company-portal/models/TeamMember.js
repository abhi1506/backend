const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  empID: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  role: { 
    type: String, 
    required: true, 
  }, 
  bio: { type: String, maxlength: 500 }, 
  content: { type: String},
  rating: { type: Number, min: 0, max: 5, default: 0 },  
  leader: { type: Boolean, default: false },
  contactInfo: {
    phone: { type: String, match: [/^\d{10}$/, 'Invalid phone number'] },
    email: { type: String, match: [/^\S+@\S+\.\S+$/, 'Invalid email'] },
    location: { type: String }
  },
  socialMedia: {
    instagram: { type: String },
    facebook: { type: String },
    twitter: { type: String },
    linkedin: { type: String },
  },
  avatar: { 
    public_id: { type: String },
    url: { 
      type: String, 
      default: 'https://default-avatar-url.com/avatar.png',
    },
  },
  dateJoined: { type: Date, default: Date.now }, 
}, { timestamps: true });

module.exports = mongoose.model('TeamMember', teamMemberSchema);
