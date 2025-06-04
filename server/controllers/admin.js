// controllers/insertController.js
const pool = require('../db');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

console.log(generateSecretKey());

// Function to generate JWT token
const generateToken = (payload) => {
  const secretKey = generateSecretKey(); // Generating the secret key
  return jwt.sign(payload, secretKey, { expiresIn: '24h' }); // Using the generated secret key and setting expiration time
};


const bcrypt = require('bcrypt');

const insertData = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phoneNumber,
      jobNumber,
      password, // Plain text password received from the request
      birthdate,
      department,
      role,
    } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    const result = await pool.query(
      'INSERT INTO public.users(nom_user, prenom_user, secteur_users, birthdate, email_users, num_tlf_user, num_post, password, id_roles) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id_users;',
      [
        firstName,
        lastName,
        department,
        birthdate,
        email,
        phoneNumber,
        jobNumber,
        hashedPassword, // Insert the hashed password into the database
        role,
      ]
    );

    const userId = result.rows[0].id; // Accessing the returned ID from the insert query
    const token = generateToken({ userId });
    
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const GetEmployer = async (req, res) => {
  try {
    // Insert the role into the database
    const result = await pool.query('SELECT * FROM public.users');

    res.status(201).json(result.rows);
  } catch (error) {
    console.error('Error adding role:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const GetLogin = async (req, res) => {
  try {
    const { email, password, } = req.body;
    const result = await pool.query('SELECT * FROM public.users where password=$1 and email_users=$2'
    ,[email, password]);

    res.status(201).json(result.rows);
  } catch (error) {
    console.error('Error adding role:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
const insertRole =async (req, res) => {
    const { roleName } = req.body;
    try {
        // Insert the role into the database
        const result = await pool.query('INSERT INTO roles (nom_Role) VALUES ($1) RETURNING *', [roleName]);
    
        res.status(201).json(result.rows[0]);
      } catch (error) {
        console.error('Error adding role:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
const GetRole =async (req, res) => {
   
    try {
        // Insert the role into the database
        const result = await pool.query('SELECT* FROM public.roles;');
    
        res.status(201).json(result.rows);
      } catch (error) {
        console.error('Error adding role:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}



module.exports = {
insertRole,
GetRole,
GetLogin,
GetEmployer,
 insertData}