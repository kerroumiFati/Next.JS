const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const pool = require('../db');
// Import your user model or database operations

const secretKey = 'your_secret_key'; // Replace with your secret key
const expiresIn = '1h'; // Token expiration time

const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const query = 'SELECT * FROM public.users WHERE nom_user = $1';
      const result = await pool.query(query, [username]);

      if (result.rows.length === 0) {
        return res.status(401).json({ message: 'User not found' });
      }

      const user = result.rows[0];

      // Ensure that the retrieved user object has the correct password field (passwordHash)
      if (!user.password || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }
console.log(user)
      const token = jwt.sign({ username: user.id_roles }, secretKey, { expiresIn });
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error retrieving user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

  

module.exports = authController;
