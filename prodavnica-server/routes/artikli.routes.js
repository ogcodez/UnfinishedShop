module.exports = app => {
  const artikli = require("../controllers/artikli.controller.js");

  var router = require("express").Router();

  router.post("/", artikli.create);

  router.get("/bt" , artikli.findBT);

  router.get("/od" , artikli.findOD);

  router.get("/so" , artikli.findSO);

  router.get("/p" , artikli.findP);

  router.get("/", artikli.findAll);

  router.get("/:id", artikli.findOne);

  router.put("/:id", artikli.update);

  router.delete("/:id", artikli.delete);

  router.delete("/", artikli.deleteAll);

  app.use("/api/artikli", router);
};
