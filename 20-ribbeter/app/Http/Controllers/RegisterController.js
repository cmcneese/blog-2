'use strict';

const Ribbit = use('App/Model/User');
// const Hash = use('Hash');

class RegisterController {

  * index(request, response) {
    const ribbits = yield Ribbit.with('user').fetch();

    response.send(ribbits);
  }

  * store(request, response) {
    const input = request.only('body');
    input.user_id = request.currentUser.id;
    const ribbit = yield Ribbit.create(input);

    response.send(ribbit);
  }

  * show(request, response) {
    const id = request.param('id');
    const ribbit = yield Ribbit.with('user').where({ id }).firstOrFail();

    response.send(ribbit);
  }

  * update(request, response) {
    const input = request.only('user_id', 'body');
    const id = request.param('id');

    const ribbit = yield Ribbit.with('user').where({ id }).firstOrFail();
    ribbit.fill(input);
    yield ribbit.save(input);

    response.send(ribbit);
  }

  * destroy(request, response) {
    const id = request.param('id');
    const ribbit = yield Ribbit.query().where({ id }).firstOrFail();
    yield ribbit.delete();

    response.status(204).send();
  }
    }


module.exports = RegisterController;
