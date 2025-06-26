const express = require('express');
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the NFEST API!' });
});

// SIGNUP
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password)
    return res.status(400).json({ message: 'All fields are required' });

  db.query(
    'SELECT * FROM users WHERE username = ? OR email = ?',
    [username, email],
    async (err, results) => {
      if (err) return res.status(500).json({ message: 'DB error' });
      if (results.length > 0)
        return res.status(400).json({ message: 'Username or email already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);
      db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, hashedPassword],
        (err2) => {
          if (err2) return res.status(500).json({ message: 'DB error' });
          res.json({ message: 'Signup successful' });
        }
      );
    }
  );
});

// LOGIN
const jwt = require('jsonwebtoken');
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'All fields are required' });

  db.query(
    'SELECT * FROM users WHERE username = ? OR email = ?',
    [username, username],
    async (err, results) => {
      if (err) return res.status(500).json({ message: 'DB error' });
      if (results.length === 0)
        return res.status(400).json({ message: 'User not found' });

      const user = results[0];
      const match = await bcrypt.compare(password, user.password);
      if (!match)
        return res.status(400).json({ message: 'Invalid password' });

      // Generate JWT
      const token = jwt.sign(
        { id: user.id, username: user.username, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
      );

      res.json({
        message: 'Login successful',
        user: { id: user.id, username: user.username, email: user.email },
        token // Kirim token ke frontend
      });
    }
  );
});

const authenticateToken = require('../middleware/auth');

// Route untuk cek user login (protected)
router.get('/me', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

router.post('/posts', authenticateToken, upload.single('image'), (req, res) => {
  const { caption } = req.body;
  const user_id = req.user.id; // dari JWT
  const image_url = req.file ? `/uploads/${req.file.filename}` : null;

  if (!caption && !image_url) {
    return res.status(400).json({ message: 'Caption or image required' });
  }

  db.query(
    'INSERT INTO posts (user_id, caption, image_url) VALUES (?, ?, ?)',
    [user_id, caption, image_url],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'DB error' });
      res.json({ message: 'Post created', postId: result.insertId });
    }
  );
});

// GET ALL POSTS
router.get('/posts', authenticateToken, (req, res) => {
  db.query(
    `SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at DESC`,
    (err, results) => {
      if (err) return res.status(500).json({ message: 'DB error' });
      res.json(results);
    }
  );
});

module.exports = router;