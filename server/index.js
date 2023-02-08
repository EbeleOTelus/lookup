const express = require('express');
const morgan = require('morgan');
const bcrypt = require("bcrypt");
const { Router } = require('express');
const {pool, register, signIn} = require('./db/db.js');
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(morgan('dev'));

// const users = {
// firstname = 'Eszter',
// lastname = 'Egyud',
// email = 'a@a.com',
// password = '1234'

// };

// app.get("/login", (req, res) => {
//   const email = req.body.email;
//   const password = req.body.password;
//   if (email && password) {
//     res.redirect("/");
//   } else {
//     const templateVars = {
//       user: undefined
//     };
//     res.render("login", templateVars); //no need as spa ,render not reqd
//   }
// });


// Router.post("/login", (req, res => {
//   validateForm(req, res);

// });

// Router.post("/signup",  async (req, res => {
//   validateForm(req, res);
app.post("/signup", (request, response) => {
  // hash the password 
  console.log('testing');
  bcrypt
    .hash(request.body.password, 10)
    .then((hashedPassword) => {
      // create a new user instance and collect the data
      const user = {
        firstname: request.body.firstname,
        lastname: request.body.lastname,
        email: request.body.email,
        password: hashedPassword,
      };

      // save the new user
      // user
      //   .save()

      register(...user) 
        // return success if the new user is added to the database successfully
        .then((result) => {
          response.status(201).send({
            message: "User Created Successfully",
            result,
          });
        })
        // catch error if the new user wasn't added successfully to the database
        .catch((error) => {
          response.status(500).send({
            message: "Error creating user",
            error,
          });
        });
    })
    // catch error if the password hash isn't successful
    .catch((e) => {
      response.status(500).send({
        message: "Password was not hashed successfully",
        e,
      });
    });
});

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