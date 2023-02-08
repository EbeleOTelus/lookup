module.exports = function(router, database) {
  router.post('/signup', (req, res) => {
    console.log(req.body)
    const user = {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          password: req.body.password,
        };
    database.register(req.body.firstname, req.body.lastname, req.body.email, req.body.password )
      .then(authres => res.send({ authres }))
      .catch(e => {
        console.error(e);
        res.send(e);
      });
    });
    router.post('/login', (req, res) => {
      console.log(req.body)
      
      database.signIn(req.body.email, req.body.password )
        .then(authres => res.send({ authres }))
        .catch(e => {
          console.error(e);
          res.send(e);
        });
      });
    return router;
};

