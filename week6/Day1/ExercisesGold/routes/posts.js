const express = require('express');
const router = express.Router();

let posts = [
    { id: 1, title: "First Post", content: "This is the first blog post.", timestamp: new Date() },
    { id: 2, title: "Second Post", content: "This is the second blog post.", timestamp: new Date() }
];

router.get('/', (req, res) => {
    res.json(posts);
});

router.get('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    res.json(post);
});

router.post('/', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: "Title and content are required" });
    }
    const newPost = {
        id: posts.length + 1,
        title,
        content,
        timestamp: new Date()
    };
    posts.push(newPost);
    res.status(201).json(newPost);
});

router.put('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const post = posts.find(p => p.id === postId);
    if (!post) {
        return res.status(404).json({ error: "Post not found" });
    }
    if (title) post.title = title;
    if (content) post.content = content;
    post.timestamp = new Date(); 
    res.json(post);
});

router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const postIndex = posts.findIndex(p => p.id === postId);
    if (postIndex === -1) {
        return res.status(404).json({ error: "Post not found" });
    }
    posts.splice(postIndex, 1);
    res.status(204).send(); 
});

module.exports = router;