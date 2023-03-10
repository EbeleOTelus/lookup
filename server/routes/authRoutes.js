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
    
    login(user.email, user.password)
      .then(authres => {
        console.log("req.body--------------", req.body);
        if (!authres) {
          res.send({ error: "error" });
          return;
        }
        console.log("authres---", authres)
        
        res.send({ user: { email: authres.email, id: authres.id } });

      })
      .catch(e => {
        console.error(e);
        res.send(e);
      });

  });

  router.post('/logout', (req, res) => {
    
    res.send({});
  })
};

