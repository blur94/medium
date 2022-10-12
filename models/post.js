const mongoose = require('mongoose');

//Schema - records to be collected
const PostSchema = new mongoose.Schema({
    author: { type: String, required: true },
    author_img: { type: String, required: true },
    category: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    content: { type: String, required: true },
    img: { type: String, required: true },
    read_time: { type: String, required: true },
    is_selected: { type: Boolean, required: true },
    created_at: { type: Date, default: () => Date.now() }
});

//Collections -where they're stored
const Post = mongoose.model('posts', PostSchema);

module.exports = Post;