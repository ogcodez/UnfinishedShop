module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      naslov: String,
      opis: String,
      cena: Number,
      popust: Number,
      tip: String,
      kolicina: Number,
      slika: String
    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Artikal = mongoose.model("artikal", schema);
  return Artikal;
};
