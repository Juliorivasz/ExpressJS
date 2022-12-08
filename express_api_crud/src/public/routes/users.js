function UsersRoutes(app) {
  app.get("/Username", (req, res) => {
    res.send("username page");
  });

  app.get("/profile", (req, res) => {
    console.log(req.body);
    res.send("profile page");
  });
}

module.exports = UsersRoutes;
