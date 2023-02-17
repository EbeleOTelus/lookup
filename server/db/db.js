
const { Pool } = require('pg');



const pool = new Pool ({
  user: 'labber',
  password: 'labber',
  host: 'localhost',
  database: 'finalproject',
  port: 5432
});

const register = (firstname, lastname, email, password) => {
  return pool.query(
    `INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *;`, [firstname, lastname, email, password]).then((result) => {
     
      return result.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });

  }



  const signIn = (email, password) => {
   return  pool.query(
      `SELECT (email, password) FROM users WHERE email = $1 AND password = $2`, [email, password])
        .then((result) => {
          
          return result.rows;
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

    const getUserWithEmail = function(email) {

      return pool
        .query
        (`SELECT * FROM users WHERE email = $1`, [email])
    
        .then((res) => {
          
          if (res) {
            return res.rows[0];
          } else {
            return null;
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
      

  module.exports = {pool, register, signIn, getUserWithEmail};
  