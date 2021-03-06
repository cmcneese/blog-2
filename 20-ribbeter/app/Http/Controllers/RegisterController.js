'use strict';

const User = use('App/Model/User');
const Hash = use('Hash');

class RegisterController {

  * create(request, response) {
    yield response.sendView('user.create');
  }

  * store(request, response) {
    const { username, email, password } = request.all();

    try {
      const user = yield User.create({
        username,
        email,
        password: yield Hash.make(password),
      });

      yield request.auth.login(user);

      yield request.with({
        success: 'Success! Your account has been created!',
      }).flash();

      response.redirect('/user');
    } catch (e) {
      yield request
      .withOut('password')
      .andWith({ error: 'Ribbit! That username or email is already taken!' })
      .flash();

      response.redirect('back');
    }
  }
}


module.exports = RegisterController;
