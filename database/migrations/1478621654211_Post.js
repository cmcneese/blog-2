'use strict';

const Schema = use('Schema');

class PostsTableSchema extends Schema {

  up() {
    this.create('posts', (table) => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop('posts');
  }

}

module.exports = PostsTableSchema;
