exports.seed = function(knex) {
  return knex("travelog")
    .del()
    .then(function() {
      return knex("travelog").insert([
        {
          year: 2018,
          month: 6,
          country: "Italy",
          city: "Venice",
          favorite_memory: "Family gondola ride!",
          people: null,
          photo_url: null
        }
      ]);
    });
};
