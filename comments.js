// Create web server
// Create web server for comment

// Import required modules
const express = require('express');
const app = express();
const router = express.Router();

// Middleware to parse JSON bodies
app.use(express.json());

// Controller logic
const commentController = {
    // Display list of all comments
    comment_list: (req, res) => {
        res.send('NOT IMPLEMENTED: Comment list');
    },

    // Display form to create a comment
    comment_create_get: (req, res) => {
        res.send('NOT IMPLEMENTED: Comment create form GET');
    },

    // Handle creating a comment
    comment_create_post: (req, res) => {
        res.send('NOT IMPLEMENTED: Comment create POST');
    },

    // Handle deleting a comment
    comment_delete: (req, res) => {
        res.send(`NOT IMPLEMENTED: Comment delete for ID ${req.params.id}`);
    }
};

// Define routes
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete);

// Use the routes in the app
app.use('/comments', router);

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
