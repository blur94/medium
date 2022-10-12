const Post = require('../../models/post');

const routes = function (app) {
    app.get('/post', async (req, res) => {
        try {
            let posts = await Post.find();
            res.json(posts);
        } catch (err) {
            res.send("Server error occurs");
        }
    });

    app.get('/post/:id', async (req, res) => {
        try {
            let id=req.params.id
            let postsById = await Post.findById(id);
            if(!postsById){
                return res.send({
                    msg: "The id does not exist",
                    code:404
                })
            } else{
                return res.status(200).json(postsById)
            }
        } catch (err) {
            res.send("Server error occurs");
        }
    });

    app.post('/post', async (req, res) => {
        try {
            let post = new Post(req.body);
            await post.save();
            res.json({
                msg: "Post Saved",
                code: 200
            });
        } catch (err) {
            res.send('Server error occurs');
        }
    });
};

module.exports = routes;