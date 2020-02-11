exports.up = function(knex) {
  return knex.schema.createTable("travelog", t => {
    t.increments("id").index();
    t.integer("year");
    t.integer("month");
    t.text("country");
    t.text("city");
    t.text("favorite_memory");
    t.text("people");
    t.text("photo_url");
  });
};

exports.down = function(knex) {
  knex.schema.dropTable("travelog");
};
