'use strict';

const Lucid = use('Lucid');

class Ribbit extends Lucid {

  user() {
    return this.belongsTo('App/Model/User', 'id', 'user_id');
  }
}

module.exports = Ribbit;
