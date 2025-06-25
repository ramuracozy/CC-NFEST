const express = require('express');
const db = require('../config/db');
const bcrypt = require('bcryptjs');

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

module.exports = router;