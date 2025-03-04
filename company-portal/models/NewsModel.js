const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    category: {
        type: String,
        required: true,
    },
    publishDate: {
        type: Date,
        required: true,
        default: Date.now,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    content: {
        type: String,
        required: true,
    },
    fullContent: [
        {
            type: String,
        }
    ],
    // author: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', 
    // },    
    images: [{
        public_id: {
            type: String,
        },
        url: {
            type: String,
            default: 'https://default-avatar-url.com/avatar.png',
        },
    }],
});

module.exports = mongoose.model('News', newsSchema);
