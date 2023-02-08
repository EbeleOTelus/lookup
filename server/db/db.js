
const { Pool } = require('pg');
require('dotenv').config();


const pool = new Pool ({
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  password: process.env.DATABASE_USER,
  port: process.env.DATABASE_PORT


});
const register = (firstname, lastname, email, password) => {
  pool.query(
    `INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING id, password`, [firstname, lastname, email, password], (err, results) => {
      if (err) {
        throw err;
      }

    });
  }



  const signIn = (email, password) => {
    pool.query(
      `SELECT (email, password) FROM users WHERE email = $1 AND password = $2`, [email, password], (err, results) => {
        if (err) {
          throw err;
        };
      });
    }
      

  module.exports = {pool, register, signIn};
  