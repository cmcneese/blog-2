'use strict';
const User = use('App/Model/User');
const Hash = use('Hash');

class UserController {

  * index(request, response) {
    const users = yield UserModel.all();

    yield response.sendView('users.index', { users: users.toJSON() });
  }
  * create(request, response) {
    yield response.sendView('user.create');
  }
}

module.exports = UserController;
