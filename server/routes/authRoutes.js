module.exports = function(router, database) {
  router.post('/signup', (req, res) => {
    console.log(req.body);
    const user = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
    };
    database.register(req.body.firstname, req.body.lastname, req.body.email, req.body.password)
      .then(authres => res.send({ authres }))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
  });
  // router.post('/login', (req, res) => {
  //   console.log(req.body)

  //   database.signIn(req.body.email, req.body.password )
  //     .then(authres => res.send({ authres }))
  //     .catch(e => {
  //       console.error(e);
  //       res.send(e);
  //     });
  //   });
  // return router;

   
  const login = function(email, password) {

    
    return database.getUserWithEmail(email)
    .then(user => {
      if (password, user.password) {
        
        return user;
      }
      return null;
      
    });
  };
  
  router.post('/login', (req, res) => {
    const user = req.body;
    // const { email, password } = req.body;
    login(user.email, user.password)
      .then(authres => {
        if (!user) {
          res.send({ error: "error" });
          return;
        }
        req.session.userId = user.id;
        res.send({ user: { email: user.email, id: user.id } });

      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });

  });

  router.post('/logout', (req, res) => {
    req.session.userId = null;
    res.send({});
  })
};

