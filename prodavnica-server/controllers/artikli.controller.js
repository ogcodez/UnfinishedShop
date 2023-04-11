const db = require("../models");
const Artikal = db.artikal;

exports.create = (req, res) => {
  // Validate request
  if (!req.body.naslov && !req.body.opis && !req.body.cena && !req.body.popust && !req.body.tip && !req.body.kolicina && !req.body.slika) {
    res.status(400).send({ message: "Ne sme biti prazno!" });
    return;
  }

  const artikal = new Artikal({
    naslov: req.body.naslov,
    opis: req.body.opis,
    cena: req.body.cena,
    popust: req.body.popust,
    tip: req.body.tip,
    kolicina: req.body.kolicina,
    slika: req.body.slika,
  });

  // Save Artikal in the database
  artikal
    .save(artikal)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the artikal."
      });
    });
};

// Retrieve all artikal from the database.
exports.findAll = (req, res) => {
  const naslov = req.query.naslov;
  var condition = naslov ? { naslov: { $regex: new RegExp(naslov), $options: "i" } } : {};

  Artikal.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error."
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Artikal.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Ne postoji artikal:  " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error" + id });
    });
};

exports.findBT = (req, res) => {
  const tip = req.params.tip;

  Artikal.find({ "tip": "bela_tehnika" })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Ne postoji artikal tipa:  " + tip });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error" + tip });
    });
};

exports.findOD = (req, res) => {
  const tip = req.params.tip;

  Artikal.find({ "tip": "odeca" })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Ne postoji artikal tipa:  " + tip });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error" + tip });
    });
};

exports.findP = (req, res) => {
  const popust = req.params.popust;

  Artikal.find({ "popust" : { $gte: 19} })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Ne postoji ponuda sa  " + popust + "% popusta" });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error" + tip });
    });
};

exports.findSO = (req, res) => {
  const tip = req.params.tip;

  Artikal.find({ "tip": "skolska_oprema" })
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Ne postoji artikal tipa:  " + tip });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error" + tip });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Ne sme biti prazno!"
    });
  }

  const id = req.params.id;

  Artikal.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Ne moze id=${id}. `
        });
      } else res.send({ message: "Uspeno promenjeno." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error =" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Artikal.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Ne moze se obrisati id=${id}.`
        });
      } else {
        res.send({
          message: "Uspeno!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Ne moze id=" + id
      });
    });
};

exports.deleteAll = (req, res) => {
  Artikal.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Uspesno!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error."
      });
    });
};

