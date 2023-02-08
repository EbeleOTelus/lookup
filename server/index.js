const express = require('express');
const morgan = require('morgan');
const bcrypt = require("bcrypt");
const { Router } = require('express');
const database = require('./db/db.js');
const authRoutes = require('./routes/authRoutes.js');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(morgan('dev'));
app.use(express.json())

const authRouter = express.Router();
authRoutes(authRouter, database);
app.use('/auth', authRouter);

const users = {
firstname: 'Eszter',
lastname: 'Egyud',
email: 'a@a.com',
password: '1234'

}



//login post req
app.post("/login", (request, response) => {
  // check if email exists
  User.findOne({ email: request.body.email })

    // if email exists
    .then((user) => {
      // compare the password entered and the hashed password found
      bcrypt
        .compare(request.body.password, user.password)

        // if the passwords match
        .then((passwordCheck) => {

          // check if password matches
          if(!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }

          //   create JWT token
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );

          //   return success response
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })
        // catch error if password does not match
        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    // catch error if email does not exist
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});



app.listen(port,() => {
  console.log(`app is listening on port ${port}`)
})