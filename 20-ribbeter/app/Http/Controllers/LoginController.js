'use strict';

class LoginController {

  * create(request, response) {
    yield response.sendView('login.create');
  }
  * store(request, response) {
    const { email, password } = request.all();

    try {
      const validLogin = yield request.auth.attempt(email, password);
      yield request.with({ success: 'Success! You are logged in!' }).flash();

      response.redirect('users');
    } catch (e) {
      yield request.withOut('password')
      .andWith({ error: 'Email or password do not match.' }).flash();

      response.redirect('back');
    }
  }
  * destroy(request, response) {
    yield request.auth.logout();

    yield request.with({ success: 'You have been logged out!' }).flash();

    response.redirect('/login');
  }
}
module.exports = LoginController;
